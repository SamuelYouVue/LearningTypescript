"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./src/Person");
var Email_1 = require("./src/Email");
var Teacher_1 = require("./src/Teacher");
var teacher = new Teacher_1.Teacher("remo", "jansen", new Email_1.Email("remo.jansen@wolksoftware.com"), ["math", "physics"]);
var me = new Person_1.Person("remo", "jansen", new Email_1.Email("remo.jansen@wolksoftware.com"));
me.greet();
teacher.greet();
//me.teach(); // Error : Property 'teach' does not exist on type 'Person'
teacher.teach();
