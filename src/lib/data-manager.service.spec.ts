import { TestBed } from '@angular/core/testing';

import { DataManagerService } from './data-manager.service';

describe('DataManagerService', () => {
  let animalBreedId = "/animal_breeds/1";
  let service: DataManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve animal breed', async() => {
    let animalBreed = await service.store.queryAnimalBreed({id: animalBreedId});
    expect(animalBreed.animalBreed.name).toBeDefined();
  });

  it('mutation with cache', async() => {
    let newName = new Date().getTime().toString();
    let animalBreedBefore = await service.store.queryAnimalBreed({id: animalBreedId});
    const oldName = animalBreedBefore.animalBreed.name;
    await service.store.mutateUpdateAnimalBreed({input: {id: animalBreedId, name: newName}});
    let animalBreedAfter = await service.store.queryAnimalBreed({id: animalBreedId});
    expect(oldName == animalBreedAfter.animalBreed.name).toBeFalsy();

  });

  it('mutation without cache', async() => {
    let newName = new Date().getTime().toString();
    let animalBreedBefore = await service.store.queryAnimalBreed({id: animalBreedId});
    const oldName = animalBreedBefore.animalBreed.name;
    await service.store.mutateUpdateAnimalBreed({input: {id: animalBreedId, name: newName}});
    let animalBreedAfter = await service.store.queryAnimalBreed({id: animalBreedId}, undefined, {fetchPolicy: "no-cache"});
    expect(oldName == animalBreedAfter.animalBreed.name).toBeFalsy();

  });

  it('mutation without requery', async() => {
    let newName = new Date().getTime().toString();
    let animalBreedBefore = await service.store.queryAnimalBreed({id: animalBreedId});
    const oldName = animalBreedBefore.animalBreed.name;
    await service.store.mutateUpdateAnimalBreed({input: {id: animalBreedId, name: newName}});
    const animalBreed = service.store.animalBreeds.get(animalBreedId);
    expect(animalBreed?.name).toBeDefined();
    expect(oldName == animalBreed?.name).toBeFalsy();
  });
});
