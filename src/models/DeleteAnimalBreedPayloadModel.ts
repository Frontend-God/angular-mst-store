import { Instance } from "mobx-state-tree"
import { DeleteAnimalBreedPayloadModelBase } from "./DeleteAnimalBreedPayloadModel.base"

/* The TypeScript type of an instance of DeleteAnimalBreedPayloadModel */
export interface DeleteAnimalBreedPayloadModelType extends Instance<typeof DeleteAnimalBreedPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteAnimalBreedPayloadModel */
export { selectFromDeleteAnimalBreedPayload, deleteAnimalBreedPayloadModelPrimitives, DeleteAnimalBreedPayloadModelSelector } from "./DeleteAnimalBreedPayloadModel.base"

/**
 * DeleteAnimalBreedPayloadModel
 *
 * Animal Breed Subtype of the Animal Species
 */
export const DeleteAnimalBreedPayloadModel = DeleteAnimalBreedPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
