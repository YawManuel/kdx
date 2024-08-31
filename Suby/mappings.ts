import { BigInt } from "@graphprotocol/graph-ts"
import { MyContract, MyEvent } from "../generated/MyContract/MyContract"
import { MyEntity } from "../generated/schema"

export function handleMyEvent(event: MyEvent): void {
  let entity = new MyEntity(event.params.someId.toString())
  entity.someField = event.params.someField
  entity.save()
}