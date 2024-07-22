function Employee (name, salary, status) {
    this.name = name;
    this.salary = salary;
    this.status = status;
}
    var sasuke = new Employee("Sasuke", 80000, "full-time");
    var naruto = new Employee("Naruto", 100000, "full-time");
    var sakura = new Employee("Sakura", 55000, "part-time");

    // console.log(sakura)
    sasuke.this.status("part-time");
    console.log(sasuke)
