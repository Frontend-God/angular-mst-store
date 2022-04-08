/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AnimalModel, AnimalModelType } from "./AnimalModel"
import { AnimalModelSelector } from "./AnimalModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  node: AnimalModelType;
}

/**
 * AnimalEdgeBase
 * auto generated base class for the model AnimalEdgeModel.
 *
 * Edge of Animal.
 */
export const AnimalEdgeModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AnimalEdge')
  .props({
    __typename: types.optional(types.literal("AnimalEdge"), "AnimalEdge"),
    node: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AnimalModel))),
    cursor: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AnimalEdgeModelSelector extends QueryBuilder {
  get cursor() { return this.__attr(`cursor`) }
  node(builder?: string | AnimalModelSelector | ((selector: AnimalModelSelector) => AnimalModelSelector)) { return this.__child(`node`, AnimalModelSelector, builder) }
}
export function selectFromAnimalEdge() {
  return new AnimalEdgeModelSelector()
}

export const animalEdgeModelPrimitives = selectFromAnimalEdge().cursor
