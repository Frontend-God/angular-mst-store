import { Instance } from "mobx-state-tree"
import { UpdateAnimalBreedSubscriptionPayloadModelBase } from "./UpdateAnimalBreedSubscriptionPayloadModel.base"

/* The TypeScript type of an instance of UpdateAnimalBreedSubscriptionPayloadModel */
export interface UpdateAnimalBreedSubscriptionPayloadModelType extends Instance<typeof UpdateAnimalBreedSubscriptionPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateAnimalBreedSubscriptionPayloadModel */
export { selectFromUpdateAnimalBreedSubscriptionPayload, updateAnimalBreedSubscriptionPayloadModelPrimitives, UpdateAnimalBreedSubscriptionPayloadModelSelector } from "./UpdateAnimalBreedSubscriptionPayloadModel.base"

/**
 * UpdateAnimalBreedSubscriptionPayloadModel
 *
 * Animal Breed Subtype of the Animal Species
 */
export const UpdateAnimalBreedSubscriptionPayloadModel = UpdateAnimalBreedSubscriptionPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
