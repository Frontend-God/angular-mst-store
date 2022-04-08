import { Instance } from "mobx-state-tree"
import { CreateAnimalPayloadModelBase } from "./CreateAnimalPayloadModel.base"

/* The TypeScript type of an instance of CreateAnimalPayloadModel */
export interface CreateAnimalPayloadModelType extends Instance<typeof CreateAnimalPayloadModel.Type> {}

/* A graphql query fragment builders for CreateAnimalPayloadModel */
export { selectFromCreateAnimalPayload, createAnimalPayloadModelPrimitives, CreateAnimalPayloadModelSelector } from "./CreateAnimalPayloadModel.base"

/**
 * CreateAnimalPayloadModel
 *
 * Animal Entity - parent of all animal classes
 */
export const CreateAnimalPayloadModel = CreateAnimalPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
