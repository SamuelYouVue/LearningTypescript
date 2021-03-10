import { Person } from "./src/Person";
import { Email } from "./src/Email";
import { Teacher } from "./src/Teacher";

var teacher = new Teacher("remo", "jansen", new Email("remo.jansen@wolksoftware.com"), ["math", "physics"]);
var me = new Person("remo", "jansen", new
    Email("remo.jansen@wolksoftware.com"));
me.greet();
teacher.greet();
//me.teach(); // Error : Property 'teach' does not exist on type 'Person'
teacher.teach();
