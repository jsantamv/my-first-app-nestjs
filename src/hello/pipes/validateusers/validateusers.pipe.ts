import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateusersPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(` ${value}`);

    const ageArg = parseInt(value.age.toString(), 10);

    if (isNaN(ageArg)) {
      throw new HttpException(`age must be a number`, HttpStatus.BAD_REQUEST);
    }

    return { ...value, age: ageArg };
  }
}
