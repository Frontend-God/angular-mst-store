/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { QueryBuilder } from "mst-gql"
import { AnimalBreedModelType } from "./AnimalBreedModel"
import { AnimalBreedModelSelector } from "./AnimalBreedModel.base"
import { AnimalModelType } from "./AnimalModel"
import { AnimalModelSelector } from "./AnimalModel.base"
import { AnimalSpeciesModelType } from "./AnimalSpeciesModel"
import { AnimalSpeciesModelSelector } from "./AnimalSpeciesModel.base"

export type NodeUnion = AnimalModelType | AnimalBreedModelType | AnimalSpeciesModelType

export class NodeModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  animal(builder?: string | AnimalModelSelector | ((selector: AnimalModelSelector) => AnimalModelSelector)) { return this.__inlineFragment(`Animal`, AnimalModelSelector, builder) }
  animalBreed(builder?: string | AnimalBreedModelSelector | ((selector: AnimalBreedModelSelector) => AnimalBreedModelSelector)) { return this.__inlineFragment(`AnimalBreed`, AnimalBreedModelSelector, builder) }
  animalSpecies(builder?: string | AnimalSpeciesModelSelector | ((selector: AnimalSpeciesModelSelector) => AnimalSpeciesModelSelector)) { return this.__inlineFragment(`AnimalSpecies`, AnimalSpeciesModelSelector, builder) }
}
export function selectFromNode() {
  return new NodeModelSelector()
}

export const nodeModelPrimitives = selectFromNode()