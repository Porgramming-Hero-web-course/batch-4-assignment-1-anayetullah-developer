# The significance of union and intersection types in Typescript.

In TypeScript, **union** and **intersection types** are powerful tools for describing how types can combine and interact. 

### **1\. Union Types**

A **union type** hold a value that could be one of multiple types. It's represented with the | (pipe) symbol. This is useful for situations where a variable might accept multiple types.

#### **Example:**

A variable that can be either a string or a number.

```
let id: string | number;

id = 42;        (valid)

id = "ABC123";  (also valid)

id = true;   (invalid, only string or number allowed)

```

In this example, The id variable can be a string or number, but not any other type.

#### **Practical Use Case:**

A function that handles both strings and numbers differently.

```

function formatId(id: string | number) {

    if (typeof id === "string") {

        return id.toUpperCase();

    } else {

        return id.toFixed(2);

    }

}

console.log(formatId(123.456));  (Output: "123.46")

console.log(formatId("abc"));    (Output: "ABC")

```

### **2\. Intersection Types**

An **intersection type** combines multiple types into one, meaning that a value must satisfy all the combined types. It’s represented with the & (ampersand) symbol. 

**Example:**

An Admin type with specific admin properties and a User type with general user properties. You can create an intersection type that combines both.

```

type User = {

    name: string;

    email: string;

};

type Admin = {

    permissions: string[];

};

type AdminUser = User & Admin;

const adminUser: AdminUser = {

    name: "Anayet",

    email: "anayet@gmail.com",

    permissions: ["read", "write", "delete"]

};

```

In this example:

*   AdminUser combines both User and Admin types.
*   This approach helps ensure that adminUser has both name, email, and permissions.
    

#### **Practical Use Case:**

A function that only accepts users with both general and admin properties.

```

function getAdminInfo(user: AdminUser) {

    return `Name: ${user.name}, Email: ${user.email}, Permissions: ${user.permissions.join(", ")}`;

}

console.log(getAdminInfo(adminUser));

Output: "Name: Anayet, Email: anayet@gmail.com, Permissions: read, write, delete"

```

### **Summary**

*   **Union types (|)** allow a variable to be one of several types.
    
*   **Intersection types (&)** require a variable to satisfy multiple types simultaneously.