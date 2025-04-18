  class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`User logged in as ${this.username}`)
    }
  }

  const user1 = new User("Swaati");
  user1.logMe()

  class Teacher extends User{
    constructor (username, subject,grade){
        super(username)
        this.subject = subject;
        this.grade = grade;

    }
     logMe(){
        console.log(`logged in as ${this.username} teaches subject ${this.subject} to grade ${this.grade}`)
     }


    }

  const teacher_1 = new Teacher("Parul","Economics","9")
  teacher_1.logMe()