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


@app.get("/get_balance/{wallet_address}")
async def get_balance(wallet_address):
    balance = w3.fromWei(w3.eth.get_balance(wallet_address), "ether")
    return {"balance": balance}


@app.get("/get_transactions/{comma_inputs}")
async def get_transactions(comma_inputs):
    wallet_address, block_size, no_of_transactions = map(
        str, list(comma_inputs.split(","))
    )
    no_of_transactions = int(no_of_transactions)
    current_block_value = w3.eth.blockNumber
    block_size = int(block_size)
    if block_size == -1:
        block_size = current_block_value

    transactions = eth.get_normal_txs_by_address(
        address=wallet_address,
        startblock=current_block_value - block_size,
        endblock=current_block_value,
        sort="desc",
    )
    transaction_list = []
    a = 0
    while a < no_of_transactions:
        for transaction in transactions:
            a += 1
            if transaction["to"] == transaction["from"]:
                transaction_list.append(
                    {
                        "to": transaction["to"],
                        "value": str(w3.fromWei(int(transaction["value"]), "ether")),
                        "type": "self",
                        "status": transaction["isError"],
                    }
                )

            elif (transaction["from"]) == wallet_address.lower():
                transaction_list.append(
                    {
                        "to": transaction["to"],
                        "value": str(w3.fromWei(int(transaction["value"]), "ether")),
                        "type": "debit",
                        "status": transaction["isError"],
                    }
                )

            else:
                transaction_list.append(
                    {
                        "from": transaction["from"],
                        "value": str(w3.fromWei(int(transaction["value"]), "ether")),
                        "type": "credit",
                        "status": transaction["isError"],
                    }
                )
    return transaction_list
