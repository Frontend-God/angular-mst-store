import { Instance } from "mobx-state-tree"
import { UpdateAnimalSpeciesPayloadModelBase } from "./UpdateAnimalSpeciesPayloadModel.base"

/* The TypeScript type of an instance of UpdateAnimalSpeciesPayloadModel */
export interface UpdateAnimalSpeciesPayloadModelType extends Instance<typeof UpdateAnimalSpeciesPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateAnimalSpeciesPayloadModel */
export { selectFromUpdateAnimalSpeciesPayload, updateAnimalSpeciesPayloadModelPrimitives, UpdateAnimalSpeciesPayloadModelSelector } from "./UpdateAnimalSpeciesPayloadModel.base"

/**
 * UpdateAnimalSpeciesPayloadModel
 *
 * Animal Entity - parent of all animal classes
 */
export const UpdateAnimalSpeciesPayloadModel = UpdateAnimalSpeciesPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
