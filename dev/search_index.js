var documenterSearchIndex = {"docs":
[{"location":"#","page":"Home","title":"Home","text":"CurrentModule = AML","category":"page"},{"location":"#AML-1","page":"Home","title":"AML","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"AML web development framework in Julia","category":"page"},{"location":"#","page":"Home","title":"Home","text":"It automatically creates/extracts HTML/XML files from Julia types!","category":"page"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Modules = [AML]","category":"page"},{"location":"#AML.@aml-Tuple{Any}","page":"Home","title":"AML.@aml","text":"@aml typedef\n\nUse @aml macro to define a Julia type, and then the package automatically creates a xml or html associated with the defined type.\n\nUse xd\"\" or hd\"\" to define a XML or HTML document:\n\n@aml struct Doc xd\"\"\n\nSpecify the element name in a string after the struct name\n\n@aml struct Person \"person\"\n\nSepecify the html/xml names for childs in strings in front of the struct fields after ,\n\nage::UInt, \"age\"\n\nFor already @aml defined types, name doesn't matter.\n\nuniversity::University, \"\"\n\nIf the value is going to be an attribute put a before its name\n\nID::Int64, a\"id\"\n\nYou can specify the default value for an argument by using = defVal syntax\n\nGPA::Float64 = 4.5, \"GPA\"\n\nExamples\n\nusing AML\n\n@aml struct Person \"person\"\n    age::UInt, \"age\"\n    field::String, \"study-field\"\n    GPA::Float64 = 4.5, \"GPA\"\n    courses::Vector{String}, \"taken-courses\"\n    ID::Int64, a\"id\"\nend\n\n@aml struct University \"university\"\n    name, a\"university-name\"\n    people::Vector{Person}, \"students\"\nend\n\n@aml struct Doc xd\"\"\n    university::University, \"\"\nend\n\n\nP1 = Person(age=24, field=\"Mechanical Engineering\", courses=[\"Artificial Intelligence\", \"Robotics\"], ID = 1)\nP2 = Person(age=18, field=\"Computer Engineering\", GPA=4, courses=[\"Julia\"], ID = 2)\n\nU = University(name=\"Julia University\", people=[P1, P2])\n\nD = Doc(university = U)\n\njulia> print(P1.aml)\n<person id=\"1\">\n  <age>24</age>\n  <study-field>Mechanical Engineering</study-field>\n  <GPA>4.5</GPA>\n  <taken-courses>Artificial Intelligence</taken-courses>\n  <taken-courses>Robotics</taken-courses>\n</person>\n\njulia> print(P2.aml)\n<person id=\"2\">\n  <age>18</age>\n  <study-field>Computer Engineering</study-field>\n  <GPA>4</GPA>\n  <taken-courses>Julia</taken-courses>\n</person>\n\njulia> print(U.aml)\n<university university-name=\"Julia University\">\n  <person id=\"1\">\n    <age>24</age>\n    <study-field>Mechanical Engineering</study-field>\n    <GPA>4.5</GPA>\n    <taken-courses>Artificial Intelligence</taken-courses>\n    <taken-courses>Robotics</taken-courses>\n  </person>\n  <person id=\"2\">\n    <age>18</age>\n    <study-field>Computer Engineering</study-field>\n    <GPA>4</GPA>\n    <taken-courses>Julia</taken-courses>\n  </person>\n</university>\n\njulia> print(D.aml)\n<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\" \"http://www.w3.org/TR/REC-html40/loose.dtd\">\n<university university-name=\"Julia University\">\n  <person id=\"1\">\n    <age>24</age>\n    <study-field>Mechanical Engineering</study-field>\n    <GPA>4.5</GPA>\n    <taken-courses>Artificial Intelligence</taken-courses>\n    <taken-courses>Robotics</taken-courses>\n  </person>\n  <person id=\"2\">\n    <age>18</age>\n    <study-field>Computer Engineering</study-field>\n    <GPA>4</GPA>\n    <taken-courses>Julia</taken-courses>\n  </person>\n</university>\n\n\n\n\n\n\n","category":"macro"},{"location":"#AML.findalllocal-Tuple{String,Node}","page":"Home","title":"AML.findalllocal","text":"findalllocal(s,node)\n\nfindalllocal with ignoring namespaces. It considers element.name for returning the elements\n\n\n\n\n\n","category":"method"},{"location":"#AML.findfirstlocal-Tuple{String,Node}","page":"Home","title":"AML.findfirstlocal","text":"findfirstlocal(s, node)\n\nfindfirst with ignoring namespaces. It considers element.name for returning the elements\n\n\n\n\n\n","category":"method"}]
}
