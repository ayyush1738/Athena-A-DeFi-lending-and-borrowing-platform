from etherscan import Etherscan
from web3 import Web3

from fastapi import FastAPI

app = FastAPI()

link = "https://mainnet.infura.io/v3/64668fecc928436582d9344071edd966"
w3 = Web3(Web3.HTTPProvider(link))

api_key = "SPXG73MIED6BFWARG61HVIQZPWQ9JPW6QP"
eth = Etherscan(api_key)


@app.get("/")
def hello():
    return {"message": "Etherscan.io"}


@app.get("/debit_score/{comma_input}")
def debit_score(comma_input):
    wallet_address, athena_liabilities, interest_rate = list(comma_input.split(","))
    athena_liabilities = int(athena_liabilities)
    interest_rate = int(interest_rate)
    current_block_value = w3.eth.blockNumber

    transactions = eth.get_normal_txs_by_address(
        address=wallet_address,
        startblock=current_block_value - 100000,
        endblock=current_block_value,
        sort="desc",
    )
    if len(transactions) > 15:
        transactions = transactions[:15]
    credit_transaction_list = []
    debit_transaction_list = []
    for transaction in transactions:
        if transaction["to"] == transaction["from"]:
            ...

        elif (transaction["from"]) == wallet_address.lower():
            debit_transaction_list.append(
                int(w3.fromWei(int(transaction["value"]), "ether"))
            )
        else:
            credit_transaction_list.append(
                int(w3.fromWei(int(transaction["value"]), "ether"))
            )
    total_assets = w3.fromWei(w3.eth.get_balance(wallet_address), "ether")
    total_liabilities = athena_liabilities
    total_recent_assets = sum(credit_transaction_list) - sum(debit_transaction_list)
    total_recent_liabilities = athena_liabilities * interest_rate / 1200

    score1 = (total_assets * 100) / (total_assets + total_liabilities)
    try:
        score2 = (total_recent_assets * 100) / (
            total_recent_assets + total_recent_liabilities
        )
    except:
        score2 = 100
    return {"debit_score": (int(score1) + int(score2)) / 2}
