/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AnimalPageInfoBase
 * auto generated base class for the model AnimalPageInfoModel.
 *
 * Information about the current page.
 */
export const AnimalPageInfoModelBase = ModelBase
  .named('AnimalPageInfo')
  .props({
    __typename: types.optional(types.literal("AnimalPageInfo"), "AnimalPageInfo"),
    endCursor: types.union(types.undefined, types.null, types.string),
    startCursor: types.union(types.undefined, types.null, types.string),
    hasNextPage: types.union(types.undefined, types.boolean),
    hasPreviousPage: types.union(types.undefined, types.boolean),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AnimalPageInfoModelSelector extends QueryBuilder {
  get endCursor() { return this.__attr(`endCursor`) }
  get startCursor() { return this.__attr(`startCursor`) }
  get hasNextPage() { return this.__attr(`hasNextPage`) }
  get hasPreviousPage() { return this.__attr(`hasPreviousPage`) }
}
export function selectFromAnimalPageInfo() {
  return new AnimalPageInfoModelSelector()
}

export const animalPageInfoModelPrimitives = selectFromAnimalPageInfo().endCursor.startCursor.hasNextPage.hasPreviousPage
