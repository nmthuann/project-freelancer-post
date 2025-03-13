import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class TransformPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'body') {
      // chuyển đổi dữ liệu từ dạng JSON sang dạng plain object
      return JSON.parse(value);
    }
    return value;
  }
}
