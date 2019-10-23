var documenterSearchIndex = {"docs":
[{"location":"#","page":"Home","title":"Home","text":"CurrentModule = AML","category":"page"},{"location":"#AML-1","page":"Home","title":"AML","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"AML web development framework in Julia","category":"page"},{"location":"#","page":"Home","title":"Home","text":"It automatically creates/extracts HTML/XML files from Julia types!","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Use @aml macro to define a Julia type, and then the package automatically creates a xml or html associated with the defined type.","category":"page"},{"location":"#Examples-1","page":"Home","title":"Examples","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"using AML\n\n@aml mutable struct Person \"person\"\n    age::UInt, \"age\"\n    field::String, \"study-field\"\n    GPA::Float64 = 4.3 , \"GPA (/4.5)\"\n    courses::Vector{String}, \"taken courses\"\nend\n\nP1 = Person(age=24, field=\"Mechanical Engineering\", GPA=2, courses=[\"Artificial Intelligence\", \"Robotics\"])\nP2 = Person(age=18, field=\"Computer Engineering\", GPA=4, courses=[\"Julia\"])\n\njulia>print(P1.aml)\n<person>\n  <age>24</age>\n  <study-field>Mechanical Engineering</study-field>\n  <taken courses>Artificial Intelligence</taken courses>\n  <taken courses>Robotics</taken courses>\n</person>\n\njulia>print(P2.aml)\n<person>\n  <age>18</age>\n  <study-field>Computer Engineering</study-field>\n  <taken courses>Julia</taken courses>\n</person>\n","category":"page"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Modules = [AML]","category":"page"},{"location":"#AML.@aml-Tuple{Any}","page":"Home","title":"AML.@aml","text":"@aml typedef\n\nUse @aml macro to define a Julia type, and then the package automatically creates a xml or html associated with the defined type.\n\nExamples\n\nusing AML\n\n@aml mutable struct Person \"person\"\n    age::UInt, \"age\"\n    field::String, \"study-field\"\n    # GPA::Float64 = 4.3 , \"GPA (/4.5)\"\n    courses::Vector{String}, \"taken courses\"\nend\n\n\nP1 = Person(age=24, field=\"Mechanical Engineering\", courses=[\"Artificial Intelligence\", \"Robotics\"])\nP2 = Person(age=18, field=\"Computer Engineering\", courses=[\"Julia\"])\n\nprint(P1.aml)\n#=\n<person>\n  <age>24</age>\n  <study-field>Mechanical Engineering</study-field>\n  <taken courses>Artificial Intelligence</taken courses>\n  <taken courses>Robotics</taken courses>\n</person>\n=#\n\nprint(P2.aml)\n#=\n<person>\n  <age>18</age>\n  <study-field>Computer Engineering</study-field>\n  <taken courses>Julia</taken courses>\n</person>\n=#\n\n\n\n\n\n","category":"macro"}]
}
