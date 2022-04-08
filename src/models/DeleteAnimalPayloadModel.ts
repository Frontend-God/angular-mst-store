import { Instance } from "mobx-state-tree"
import { DeleteAnimalPayloadModelBase } from "./DeleteAnimalPayloadModel.base"

/* The TypeScript type of an instance of DeleteAnimalPayloadModel */
export interface DeleteAnimalPayloadModelType extends Instance<typeof DeleteAnimalPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteAnimalPayloadModel */
export { selectFromDeleteAnimalPayload, deleteAnimalPayloadModelPrimitives, DeleteAnimalPayloadModelSelector } from "./DeleteAnimalPayloadModel.base"

/**
 * DeleteAnimalPayloadModel
 *
 * Animal Entity - parent of all animal classes
 */
export const DeleteAnimalPayloadModel = DeleteAnimalPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
