import { WalletCreated as WalletCreatedEvent } from "../generated/SavingsWalletFactory/SavingsWalletFactory"
import { WalletCreated } from "../generated/schema"

export function handleWalletCreated(event: WalletCreatedEvent): void {
  let entity = new WalletCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.walletAddress = event.params.walletAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
