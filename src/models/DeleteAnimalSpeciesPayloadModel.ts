import { Instance } from "mobx-state-tree"
import { DeleteAnimalSpeciesPayloadModelBase } from "./DeleteAnimalSpeciesPayloadModel.base"

/* The TypeScript type of an instance of DeleteAnimalSpeciesPayloadModel */
export interface DeleteAnimalSpeciesPayloadModelType extends Instance<typeof DeleteAnimalSpeciesPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteAnimalSpeciesPayloadModel */
export { selectFromDeleteAnimalSpeciesPayload, deleteAnimalSpeciesPayloadModelPrimitives, DeleteAnimalSpeciesPayloadModelSelector } from "./DeleteAnimalSpeciesPayloadModel.base"

/**
 * DeleteAnimalSpeciesPayloadModel
 *
 * Animal Entity - parent of all animal classes
 */
export const DeleteAnimalSpeciesPayloadModel = DeleteAnimalSpeciesPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
