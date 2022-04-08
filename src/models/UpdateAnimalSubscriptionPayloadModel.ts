import { Instance } from "mobx-state-tree"
import { UpdateAnimalSubscriptionPayloadModelBase } from "./UpdateAnimalSubscriptionPayloadModel.base"

/* The TypeScript type of an instance of UpdateAnimalSubscriptionPayloadModel */
export interface UpdateAnimalSubscriptionPayloadModelType extends Instance<typeof UpdateAnimalSubscriptionPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateAnimalSubscriptionPayloadModel */
export { selectFromUpdateAnimalSubscriptionPayload, updateAnimalSubscriptionPayloadModelPrimitives, UpdateAnimalSubscriptionPayloadModelSelector } from "./UpdateAnimalSubscriptionPayloadModel.base"

/**
 * UpdateAnimalSubscriptionPayloadModel
 *
 * Animal Entity - parent of all animal classes
 */
export const UpdateAnimalSubscriptionPayloadModel = UpdateAnimalSubscriptionPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
