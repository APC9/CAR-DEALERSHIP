import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands:Brand[] = [
    /* {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime()
    } */
  ]

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const brand: Brand ={
      id: uuid(),
      name: name.toLowerCase(),
      createdAt: new Date().getTime()
    }
    this.brands.push(brand)
    return brand;
  }

  findAll() {
    return this.brands
  }

  findOne(id: string) {
    const brand = this.brands.find( brand => brand.id === id )
    if ( !brand )
      throw new NotFoundException( `Brand with id ${id} not found`); 
    
    return brand 
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brand = this.findOne(id);
    brand.name = updateBrandDto.name;
    brand.updatedAt = new Date().getTime();
    return brand;
  }

  remove(id: string) {
    this.findOne(id)
    this.brands = this.brands.filter( brand => brand.id !== id)
  }

  fillBrandWithSeedData( brand:Brand[]){
    this.brands = brand;
  }
}
