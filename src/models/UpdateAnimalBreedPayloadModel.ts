import { Instance } from "mobx-state-tree"
import { UpdateAnimalBreedPayloadModelBase } from "./UpdateAnimalBreedPayloadModel.base"

/* The TypeScript type of an instance of UpdateAnimalBreedPayloadModel */
export interface UpdateAnimalBreedPayloadModelType extends Instance<typeof UpdateAnimalBreedPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateAnimalBreedPayloadModel */
export { selectFromUpdateAnimalBreedPayload, updateAnimalBreedPayloadModelPrimitives, UpdateAnimalBreedPayloadModelSelector } from "./UpdateAnimalBreedPayloadModel.base"

/**
 * UpdateAnimalBreedPayloadModel
 *
 * Animal Breed Subtype of the Animal Species
 */
export const UpdateAnimalBreedPayloadModel = UpdateAnimalBreedPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
