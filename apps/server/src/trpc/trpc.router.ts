import { Injectable } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { z } from 'zod';

@Injectable()
export class TrpcRouter {
  constructor(private readonly trpcService: TrpcService) {}

  appRouter = this.trpcService.trpc.router({
    hello: this.trpcService.trpc.procedure
      .input(
        z.object({
          name: z.string().optional(),
        }),
      )
      .query(({ input }) => {
        const { name } = input;
        console.log('Called');
        return {
          greeting: `Hello ${name ? name : 'No Name'}`,
        };
      }),
  });

  // async applyMiddleware(app:INestApplication){
  //     console.log("Middleware called")
  //     app.use('/trpc',
  //     trpcExpress
  //         .createExpressMiddleware({ router: this.appRouter, onError:(error)=>console.log(error) , middleware(req, res, next) {
  //             console.log(req.body, );
  //             next()
  //         }, }));

  // }
}

export type AppRouter = TrpcRouter['appRouter'];
