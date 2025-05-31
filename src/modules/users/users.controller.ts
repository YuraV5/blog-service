import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/createUserWithPassword.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createWithPassword(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.getAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.getOneById(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateById(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.deleteById(+id);
  }
}
