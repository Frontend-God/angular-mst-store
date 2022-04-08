import { Instance } from "mobx-state-tree"
import { AnimalBreedEdgeModelBase } from "./AnimalBreedEdgeModel.base"

/* The TypeScript type of an instance of AnimalBreedEdgeModel */
export interface AnimalBreedEdgeModelType extends Instance<typeof AnimalBreedEdgeModel.Type> {}

/* A graphql query fragment builders for AnimalBreedEdgeModel */
export { selectFromAnimalBreedEdge, animalBreedEdgeModelPrimitives, AnimalBreedEdgeModelSelector } from "./AnimalBreedEdgeModel.base"

/**
 * AnimalBreedEdgeModel
 *
 * Edge of AnimalBreed.
 */
export const AnimalBreedEdgeModel = AnimalBreedEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
