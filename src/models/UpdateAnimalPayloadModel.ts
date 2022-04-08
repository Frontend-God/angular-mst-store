import { Instance } from "mobx-state-tree"
import { UpdateAnimalPayloadModelBase } from "./UpdateAnimalPayloadModel.base"

/* The TypeScript type of an instance of UpdateAnimalPayloadModel */
export interface UpdateAnimalPayloadModelType extends Instance<typeof UpdateAnimalPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateAnimalPayloadModel */
export { selectFromUpdateAnimalPayload, updateAnimalPayloadModelPrimitives, UpdateAnimalPayloadModelSelector } from "./UpdateAnimalPayloadModel.base"

/**
 * UpdateAnimalPayloadModel
 *
 * Animal Entity - parent of all animal classes
 */
export const UpdateAnimalPayloadModel = UpdateAnimalPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
