import { Injectable } from '@nestjs/common';
import { initTRPC } from '@trpc/server';

@Injectable()
export class TrpcService {
  public trpc = initTRPC.create();
}
