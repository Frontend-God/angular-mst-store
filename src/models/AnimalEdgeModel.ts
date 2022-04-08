import { Instance } from "mobx-state-tree"
import { AnimalEdgeModelBase } from "./AnimalEdgeModel.base"

/* The TypeScript type of an instance of AnimalEdgeModel */
export interface AnimalEdgeModelType extends Instance<typeof AnimalEdgeModel.Type> {}

/* A graphql query fragment builders for AnimalEdgeModel */
export { selectFromAnimalEdge, animalEdgeModelPrimitives, AnimalEdgeModelSelector } from "./AnimalEdgeModel.base"

/**
 * AnimalEdgeModel
 *
 * Edge of Animal.
 */
export const AnimalEdgeModel = AnimalEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
