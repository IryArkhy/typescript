**void** = absence of a type - a return type for functions
**null and undefined** - you can include or exclude this types for variables.
**never** = it's a type assigned to values that will never occur. For instance, if you have a function that will never return, maybe because it always throws an exception or just kicks off an infinite loop, the return value of that function would be never.
**any** - use when you want opt out of type checking. This could come in handy if you work with third party library and you cannot guarantee the return type.