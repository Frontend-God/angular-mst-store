/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AnimalBreedEdgeModel, AnimalBreedEdgeModelType } from "./AnimalBreedEdgeModel"
import { AnimalBreedEdgeModelSelector } from "./AnimalBreedEdgeModel.base"
import { AnimalBreedPageInfoModel, AnimalBreedPageInfoModelType } from "./AnimalBreedPageInfoModel"
import { AnimalBreedPageInfoModelSelector } from "./AnimalBreedPageInfoModel.base"
import { RootStoreType } from "./index"


/**
 * AnimalBreedConnectionBase
 * auto generated base class for the model AnimalBreedConnectionModel.
 *
 * Connection for AnimalBreed.
 */
export const AnimalBreedConnectionModelBase = ModelBase
  .named('AnimalBreedConnection')
  .props({
    __typename: types.optional(types.literal("AnimalBreedConnection"), "AnimalBreedConnection"),
    edges: types.union(types.undefined, types.null, types.array(types.union(types.null, types.late((): any => AnimalBreedEdgeModel)))),
    pageInfo: types.union(types.undefined, types.late((): any => AnimalBreedPageInfoModel)),
    totalCount: types.union(types.undefined, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AnimalBreedConnectionModelSelector extends QueryBuilder {
  get totalCount() { return this.__attr(`totalCount`) }
  edges(builder?: string | AnimalBreedEdgeModelSelector | ((selector: AnimalBreedEdgeModelSelector) => AnimalBreedEdgeModelSelector)) { return this.__child(`edges`, AnimalBreedEdgeModelSelector, builder) }
  pageInfo(builder?: string | AnimalBreedPageInfoModelSelector | ((selector: AnimalBreedPageInfoModelSelector) => AnimalBreedPageInfoModelSelector)) { return this.__child(`pageInfo`, AnimalBreedPageInfoModelSelector, builder) }
}
export function selectFromAnimalBreedConnection() {
  return new AnimalBreedConnectionModelSelector()
}

export const animalBreedConnectionModelPrimitives = selectFromAnimalBreedConnection().totalCount
