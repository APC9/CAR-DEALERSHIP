import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Injectable()
export class CarsService {
    private cars: Car[] = 
    [
     /*  {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla' 
      } */
    ];

    findAll(){
      return this.cars;
    }

    findOneById( id:string){
      const car = this.cars.find( car => car.id === id );
      if (!car){
        throw new NotFoundException('Car con el id '+id+' no existe');
      }
      return car;
    }

    createCar( createCarDto:CreateCarDto){
      const car:Car = {
          ...createCarDto, 
          id: uuid() 
        };
        this.cars.push(car)
      return car;
    }

    updateCar(id:string, updateCarDto:UpdateCarDto){
      let car = this.findOneById(id)

      car.brand = updateCarDto.brand? updateCarDto.brand : car.brand;
      car.model = updateCarDto.model? updateCarDto.model : car.model;

      return car
    }

    deleteCar(id:string){
      this.findOneById(id)
      this.cars = this.cars.filter( car => car.id !== id)
    }

    fillCarsWithSeedData( cars:Car[]){
      this.cars = cars;
    }
}
