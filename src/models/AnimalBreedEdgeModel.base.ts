/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AnimalBreedModel, AnimalBreedModelType } from "./AnimalBreedModel"
import { AnimalBreedModelSelector } from "./AnimalBreedModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  node: AnimalBreedModelType;
}

/**
 * AnimalBreedEdgeBase
 * auto generated base class for the model AnimalBreedEdgeModel.
 *
 * Edge of AnimalBreed.
 */
export const AnimalBreedEdgeModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AnimalBreedEdge')
  .props({
    __typename: types.optional(types.literal("AnimalBreedEdge"), "AnimalBreedEdge"),
    node: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AnimalBreedModel))),
    cursor: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AnimalBreedEdgeModelSelector extends QueryBuilder {
  get cursor() { return this.__attr(`cursor`) }
  node(builder?: string | AnimalBreedModelSelector | ((selector: AnimalBreedModelSelector) => AnimalBreedModelSelector)) { return this.__child(`node`, AnimalBreedModelSelector, builder) }
}
export function selectFromAnimalBreedEdge() {
  return new AnimalBreedEdgeModelSelector()
}

export const animalBreedEdgeModelPrimitives = selectFromAnimalBreedEdge().cursor
