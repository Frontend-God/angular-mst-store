/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AnimalEdgeModel, AnimalEdgeModelType } from "./AnimalEdgeModel"
import { AnimalEdgeModelSelector } from "./AnimalEdgeModel.base"
import { AnimalPageInfoModel, AnimalPageInfoModelType } from "./AnimalPageInfoModel"
import { AnimalPageInfoModelSelector } from "./AnimalPageInfoModel.base"
import { RootStoreType } from "./index"


/**
 * AnimalConnectionBase
 * auto generated base class for the model AnimalConnectionModel.
 *
 * Connection for Animal.
 */
export const AnimalConnectionModelBase = ModelBase
  .named('AnimalConnection')
  .props({
    __typename: types.optional(types.literal("AnimalConnection"), "AnimalConnection"),
    edges: types.union(types.undefined, types.null, types.array(types.union(types.null, types.late((): any => AnimalEdgeModel)))),
    pageInfo: types.union(types.undefined, types.late((): any => AnimalPageInfoModel)),
    totalCount: types.union(types.undefined, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AnimalConnectionModelSelector extends QueryBuilder {
  get totalCount() { return this.__attr(`totalCount`) }
  edges(builder?: string | AnimalEdgeModelSelector | ((selector: AnimalEdgeModelSelector) => AnimalEdgeModelSelector)) { return this.__child(`edges`, AnimalEdgeModelSelector, builder) }
  pageInfo(builder?: string | AnimalPageInfoModelSelector | ((selector: AnimalPageInfoModelSelector) => AnimalPageInfoModelSelector)) { return this.__child(`pageInfo`, AnimalPageInfoModelSelector, builder) }
}
export function selectFromAnimalConnection() {
  return new AnimalConnectionModelSelector()
}

export const animalConnectionModelPrimitives = selectFromAnimalConnection().totalCount
