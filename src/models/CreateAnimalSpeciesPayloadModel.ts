import { Instance } from "mobx-state-tree"
import { CreateAnimalSpeciesPayloadModelBase } from "./CreateAnimalSpeciesPayloadModel.base"

/* The TypeScript type of an instance of CreateAnimalSpeciesPayloadModel */
export interface CreateAnimalSpeciesPayloadModelType extends Instance<typeof CreateAnimalSpeciesPayloadModel.Type> {}

/* A graphql query fragment builders for CreateAnimalSpeciesPayloadModel */
export { selectFromCreateAnimalSpeciesPayload, createAnimalSpeciesPayloadModelPrimitives, CreateAnimalSpeciesPayloadModelSelector } from "./CreateAnimalSpeciesPayloadModel.base"

/**
 * CreateAnimalSpeciesPayloadModel
 *
 * Animal Entity - parent of all animal classes
 */
export const CreateAnimalSpeciesPayloadModel = CreateAnimalSpeciesPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
