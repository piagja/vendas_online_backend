import { Controller, Get } from '@nestjs/common'

@Controller('user')
export class UserController {

  @Get()
  async getAllusers() {
    return JSON.stringify({ status: "Success" })
  }
}
