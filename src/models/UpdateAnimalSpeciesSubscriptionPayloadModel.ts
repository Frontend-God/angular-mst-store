import { Instance } from "mobx-state-tree"
import { UpdateAnimalSpeciesSubscriptionPayloadModelBase } from "./UpdateAnimalSpeciesSubscriptionPayloadModel.base"

/* The TypeScript type of an instance of UpdateAnimalSpeciesSubscriptionPayloadModel */
export interface UpdateAnimalSpeciesSubscriptionPayloadModelType extends Instance<typeof UpdateAnimalSpeciesSubscriptionPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateAnimalSpeciesSubscriptionPayloadModel */
export { selectFromUpdateAnimalSpeciesSubscriptionPayload, updateAnimalSpeciesSubscriptionPayloadModelPrimitives, UpdateAnimalSpeciesSubscriptionPayloadModelSelector } from "./UpdateAnimalSpeciesSubscriptionPayloadModel.base"

/**
 * UpdateAnimalSpeciesSubscriptionPayloadModel
 *
 * Animal Entity - parent of all animal classes
 */
export const UpdateAnimalSpeciesSubscriptionPayloadModel = UpdateAnimalSpeciesSubscriptionPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
