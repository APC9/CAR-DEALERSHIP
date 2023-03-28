import { Body, Controller, Delete, Get, Post, Patch, Param, ParseUUIDPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsService: CarsService
  ){}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById( @Param('id', ParseUUIDPipe ) id:string) {
    return {
      car: this.carsService.findOneById(id),
    };
  } 

  @Post()
  createCar( @Body() CreateCarDto:CreateCarDto ){
    return this.carsService.createCar( CreateCarDto)
  }

  @Patch(':id')
  updateCar( @Param('id', ParseUUIDPipe ) id:string, @Body() updateCarDto:UpdateCarDto ){
    return this.carsService.updateCar( id, updateCarDto)
  }
  
  @Delete(':id')
  deleteCar( @Param('id', ParseUUIDPipe ) id:string ){
    return this.carsService.deleteCar( id )
  }

}
