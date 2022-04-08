import { Instance } from "mobx-state-tree"
import { CreateAnimalBreedPayloadModelBase } from "./CreateAnimalBreedPayloadModel.base"

/* The TypeScript type of an instance of CreateAnimalBreedPayloadModel */
export interface CreateAnimalBreedPayloadModelType extends Instance<typeof CreateAnimalBreedPayloadModel.Type> {}

/* A graphql query fragment builders for CreateAnimalBreedPayloadModel */
export { selectFromCreateAnimalBreedPayload, createAnimalBreedPayloadModelPrimitives, CreateAnimalBreedPayloadModelSelector } from "./CreateAnimalBreedPayloadModel.base"

/**
 * CreateAnimalBreedPayloadModel
 *
 * Animal Breed Subtype of the Animal Species
 */
export const CreateAnimalBreedPayloadModel = CreateAnimalBreedPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
