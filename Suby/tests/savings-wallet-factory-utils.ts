import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { WalletCreated } from "../generated/SavingsWalletFactory/SavingsWalletFactory"

export function createWalletCreatedEvent(
  owner: Address,
  walletAddress: Address
): WalletCreated {
  let walletCreatedEvent = changetype<WalletCreated>(newMockEvent())

  walletCreatedEvent.parameters = new Array()

  walletCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  walletCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "walletAddress",
      ethereum.Value.fromAddress(walletAddress)
    )
  )

  return walletCreatedEvent
}
