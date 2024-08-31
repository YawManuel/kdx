import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { WalletCreated } from "../generated/schema"
import { WalletCreated as WalletCreatedEvent } from "../generated/SavingsWalletFactory/SavingsWalletFactory"
import { handleWalletCreated } from "../src/savings-wallet-factory"
import { createWalletCreatedEvent } from "./savings-wallet-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let walletAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newWalletCreatedEvent = createWalletCreatedEvent(owner, walletAddress)
    handleWalletCreated(newWalletCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("WalletCreated created and stored", () => {
    assert.entityCount("WalletCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "WalletCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "WalletCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "walletAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
