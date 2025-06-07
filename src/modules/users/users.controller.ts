import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/createUserWithPassword.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { ParamIdDto } from "../../common/dtos";

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
  findOne(@Param() param: ParamIdDto) {
    console.log("USER: ", param.id);
    return this.usersService.getOneById(param.id);
  }

  @Patch(":id")
  update(@Param() param: ParamIdDto, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateById(param.id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param() param: ParamIdDto) {
    return this.usersService.deleteById(param.id);
  }
}
