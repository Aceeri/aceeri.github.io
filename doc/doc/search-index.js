var searchIndex = {};
searchIndex["amethyst"] = {"doc":"Amethyst is a free and open source game engine written in idiomatic\n[Rust][rs] for building video games and interactive multimedia applications.\nThe source code is available for download on [GitHub][gh]. See the\n[online book][bk] for a complete guide to using Amethyst.","items":[[8,"State","amethyst::engine","A trait which defines game states that can be used by the state machine.",null,null],[11,"on_start","","Executed when the game state begins.",0,null],[11,"on_stop","","Executed when the game state exits.",0,null],[11,"on_pause","","Executed when a different game state is pushed onto the stack.",0,null],[11,"on_resume","","Executed when the application returns to this game state once again.",0,null],[11,"handle_events","","Executed on every frame before updating, for use in reacting to events.",0,null],[11,"fixed_update","","Executed repeatedly at stable, predictable intervals (1/60th of a second\nby default).",0,{"inputs":[{"name":"state"},{"name":"duration"}],"output":{"name":"trans"}}],[11,"update","","Executed on every frame immediately, as fast as the engine will allow.",0,{"inputs":[{"name":"state"},{"name":"duration"}],"output":{"name":"trans"}}],[11,"new","amethyst_engine::app","Creates a new Application with the given initial game state.",1,{"inputs":[{"name":"t"}],"output":{"name":"application"}}],[11,"run","","Starts the application and manages the game loop.",1,null],[11,"new","amethyst_engine::state","",2,{"inputs":[{"name":"t"}],"output":{"name":"statemachine"}}],[11,"is_running","","Checks whether the state machine is running.",2,{"inputs":[{"name":"statemachine"}],"output":{"name":"bool"}}],[11,"start","","Initializes the state machine.\n# Panics\nPanics if no states are present in the stack.",2,null],[11,"handle_events","","Passes a vector of events to the active state to handle.",2,null],[11,"fixed_update","","Updates the currently active state at a steady, fixed interval.",2,null],[11,"update","","Updates the currently active state immediately.",2,null],[11,"new","amethyst_engine::timing","",3,{"inputs":[],"output":{"name":"stopwatch"}}],[11,"elapsed","","Retrieves the elapsed time.",3,{"inputs":[{"name":"stopwatch"}],"output":{"name":"duration"}}],[11,"restart","","Stops, resets, and starts the stopwatch again.",3,null],[11,"start","","Starts, or resumes, measuring elapsed time. If the stopwatch has been\nstarted and stopped before, the new results are compounded onto the\nexisting elapsed time value.",3,null],[11,"stop","","Stops measuring elapsed time.",3,null],[11,"reset","","Clears the current elapsed time value.",3,null],[4,"Trans","amethyst::engine","Types of state transitions.",null,null],[13,"None","","Continue as normal.",4,null],[13,"Pop","","Remove the active state and resume the next state on the stack or stop if there are none.",4,null],[13,"Push","","Pause the active state and push a new state onto the stack.",4,null],[13,"Switch","","Remove the current state on the stack and insert a different one.",4,null],[13,"Quit","","Stop and remove all states and shut down the engine.",4,null],[3,"StateMachine","","A simple stack-based state machine (pushdown automaton).",null,null],[3,"Application","","User-friendly facade for building games. Manages main loop.",null,null],[11,"weeks","time::duration","Makes a new `Duration` with given number of weeks.\nEquivalent to `Duration::seconds(weeks * 7 * 24 * 60 * 60)` with overflow checks.\nPanics when the duration is out of bounds.",5,{"inputs":[{"name":"i64"}],"output":{"name":"duration"}}],[11,"days","","Makes a new `Duration` with given number of days.\nEquivalent to `Duration::seconds(days * 24 * 60 * 60)` with overflow checks.\nPanics when the duration is out of bounds.",5,{"inputs":[{"name":"i64"}],"output":{"name":"duration"}}],[11,"hours","","Makes a new `Duration` with given number of hours.\nEquivalent to `Duration::seconds(hours * 60 * 60)` with overflow checks.\nPanics when the duration is out of bounds.",5,{"inputs":[{"name":"i64"}],"output":{"name":"duration"}}],[11,"minutes","","Makes a new `Duration` with given number of minutes.\nEquivalent to `Duration::seconds(minutes * 60)` with overflow checks.\nPanics when the duration is out of bounds.",5,{"inputs":[{"name":"i64"}],"output":{"name":"duration"}}],[11,"seconds","","Makes a new `Duration` with given number of seconds.\nPanics when the duration is more than `i64::MAX` milliseconds\nor less than `i64::MIN` milliseconds.",5,{"inputs":[{"name":"i64"}],"output":{"name":"duration"}}],[11,"milliseconds","","Makes a new `Duration` with given number of milliseconds.",5,{"inputs":[{"name":"i64"}],"output":{"name":"duration"}}],[11,"microseconds","","Makes a new `Duration` with given number of microseconds.",5,{"inputs":[{"name":"i64"}],"output":{"name":"duration"}}],[11,"nanoseconds","","Makes a new `Duration` with given number of nanoseconds.",5,{"inputs":[{"name":"i64"}],"output":{"name":"duration"}}],[11,"span","","Runs a closure, returning the duration of time it took to run the\nclosure.",5,{"inputs":[{"name":"f"}],"output":{"name":"duration"}}],[11,"num_weeks","","Returns the total number of whole weeks in the duration.",5,{"inputs":[{"name":"duration"}],"output":{"name":"i64"}}],[11,"num_days","","Returns the total number of whole days in the duration.",5,{"inputs":[{"name":"duration"}],"output":{"name":"i64"}}],[11,"num_hours","","Returns the total number of whole hours in the duration.",5,{"inputs":[{"name":"duration"}],"output":{"name":"i64"}}],[11,"num_minutes","","Returns the total number of whole minutes in the duration.",5,{"inputs":[{"name":"duration"}],"output":{"name":"i64"}}],[11,"num_seconds","","Returns the total number of whole seconds in the duration.",5,{"inputs":[{"name":"duration"}],"output":{"name":"i64"}}],[11,"num_milliseconds","","Returns the total number of whole milliseconds in the duration,",5,{"inputs":[{"name":"duration"}],"output":{"name":"i64"}}],[11,"num_microseconds","","Returns the total number of whole microseconds in the duration,\nor `None` on overflow (exceeding 2^63 microseconds in either direction).",5,{"inputs":[{"name":"duration"}],"output":{"name":"option"}}],[11,"num_nanoseconds","","Returns the total number of whole nanoseconds in the duration,\nor `None` on overflow (exceeding 2^63 nanoseconds in either direction).",5,{"inputs":[{"name":"duration"}],"output":{"name":"option"}}],[11,"checked_add","","Add two durations, returning `None` if overflow occurred.",5,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"option"}}],[11,"checked_sub","","Subtract two durations, returning `None` if overflow occurred.",5,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"option"}}],[11,"min_value","","The minimum possible `Duration`: `i64::MIN` milliseconds.",5,{"inputs":[],"output":{"name":"duration"}}],[11,"max_value","","The maximum possible `Duration`: `i64::MAX` milliseconds.",5,{"inputs":[],"output":{"name":"duration"}}],[11,"zero","","A duration where the stored seconds and nanoseconds are equal to zero.",5,{"inputs":[],"output":{"name":"duration"}}],[11,"is_zero","","Returns `true` if the duration equals `Duration::zero()`.",5,{"inputs":[{"name":"duration"}],"output":{"name":"bool"}}],[11,"fmt","time","",6,{"inputs":[{"name":"tmfmt"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","time::duration","",5,{"inputs":[{"name":"duration"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cmp","","",5,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",5,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"option"}}],[11,"lt","","",5,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"bool"}}],[11,"le","","",5,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"bool"}}],[11,"gt","","",5,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"bool"}}],[11,"ge","","",5,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"bool"}}],[11,"eq","","",5,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"bool"}}],[11,"clone","","",5,{"inputs":[{"name":"duration"}],"output":{"name":"duration"}}],[11,"neg","","",5,{"inputs":[{"name":"duration"}],"output":{"name":"duration"}}],[11,"add","","",5,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"duration"}}],[11,"sub","","",5,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"duration"}}],[11,"mul","","",5,{"inputs":[{"name":"duration"},{"name":"i32"}],"output":{"name":"duration"}}],[11,"div","","",5,{"inputs":[{"name":"duration"},{"name":"i32"}],"output":{"name":"duration"}}],[11,"fmt","","",5,{"inputs":[{"name":"duration"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","time::sys::inner","",7,{"inputs":[{"name":"steadytime"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",7,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"ne","","",7,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"cmp","","",7,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",7,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"option"}}],[11,"lt","","",7,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"le","","",7,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"gt","","",7,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"ge","","",7,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"clone","","",7,{"inputs":[{"name":"steadytime"}],"output":{"name":"steadytime"}}],[11,"now","","",7,{"inputs":[],"output":{"name":"steadytime"}}],[11,"sub","","",7,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"duration"}}],[11,"sub","","",7,{"inputs":[{"name":"steadytime"},{"name":"duration"}],"output":{"name":"steadytime"}}],[11,"add","","",7,{"inputs":[{"name":"steadytime"},{"name":"duration"}],"output":{"name":"steadytime"}}],[11,"hash","time","",8,null],[11,"fmt","","",8,{"inputs":[{"name":"timespec"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cmp","","",8,{"inputs":[{"name":"timespec"},{"name":"timespec"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",8,{"inputs":[{"name":"timespec"},{"name":"timespec"}],"output":{"name":"option"}}],[11,"lt","","",8,{"inputs":[{"name":"timespec"},{"name":"timespec"}],"output":{"name":"bool"}}],[11,"le","","",8,{"inputs":[{"name":"timespec"},{"name":"timespec"}],"output":{"name":"bool"}}],[11,"gt","","",8,{"inputs":[{"name":"timespec"},{"name":"timespec"}],"output":{"name":"bool"}}],[11,"ge","","",8,{"inputs":[{"name":"timespec"},{"name":"timespec"}],"output":{"name":"bool"}}],[11,"eq","","",8,{"inputs":[{"name":"timespec"},{"name":"timespec"}],"output":{"name":"bool"}}],[11,"ne","","",8,{"inputs":[{"name":"timespec"},{"name":"timespec"}],"output":{"name":"bool"}}],[11,"clone","","",8,{"inputs":[{"name":"timespec"}],"output":{"name":"timespec"}}],[11,"new","","",8,{"inputs":[{"name":"i64"},{"name":"i32"}],"output":{"name":"timespec"}}],[11,"add","","",8,{"inputs":[{"name":"timespec"},{"name":"duration"}],"output":{"name":"timespec"}}],[11,"sub","","",8,{"inputs":[{"name":"timespec"},{"name":"duration"}],"output":{"name":"timespec"}}],[11,"sub","","",8,{"inputs":[{"name":"timespec"},{"name":"timespec"}],"output":{"name":"duration"}}],[11,"clone","","",9,{"inputs":[{"name":"precisetime"}],"output":{"name":"precisetime"}}],[11,"now","","Returns a `PreciseTime` representing the current moment in time.",9,{"inputs":[],"output":{"name":"precisetime"}}],[11,"to","","Returns a `Duration` representing the span of time from the value of\n`self` to the value of `later`.",9,{"inputs":[{"name":"precisetime"},{"name":"precisetime"}],"output":{"name":"duration"}}],[11,"fmt","","",10,{"inputs":[{"name":"steadytime"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",10,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"ne","","",10,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"cmp","","",10,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",10,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"option"}}],[11,"lt","","",10,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"le","","",10,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"gt","","",10,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"ge","","",10,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"clone","","",10,{"inputs":[{"name":"steadytime"}],"output":{"name":"steadytime"}}],[11,"now","","Returns a `SteadyTime` representing the current moment in time.",10,{"inputs":[],"output":{"name":"steadytime"}}],[11,"fmt","","",10,{"inputs":[{"name":"steadytime"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"sub","","",10,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"duration"}}],[11,"sub","","",10,{"inputs":[{"name":"steadytime"},{"name":"duration"}],"output":{"name":"steadytime"}}],[11,"add","","",10,{"inputs":[{"name":"steadytime"},{"name":"duration"}],"output":{"name":"steadytime"}}],[11,"hash","","",11,null],[11,"fmt","","",11,{"inputs":[{"name":"tm"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",11,{"inputs":[{"name":"tm"},{"name":"tm"}],"output":{"name":"bool"}}],[11,"ne","","",11,{"inputs":[{"name":"tm"},{"name":"tm"}],"output":{"name":"bool"}}],[11,"clone","","",11,{"inputs":[{"name":"tm"}],"output":{"name":"tm"}}],[11,"add","","The resulting Tm is in UTC.",11,{"inputs":[{"name":"tm"},{"name":"duration"}],"output":{"name":"tm"}}],[11,"sub","","The resulting Tm is in UTC.",11,{"inputs":[{"name":"tm"},{"name":"duration"}],"output":{"name":"tm"}}],[11,"sub","","",11,{"inputs":[{"name":"tm"},{"name":"tm"}],"output":{"name":"duration"}}],[11,"partial_cmp","","",11,{"inputs":[{"name":"tm"},{"name":"tm"}],"output":{"name":"option"}}],[11,"cmp","","",11,{"inputs":[{"name":"tm"},{"name":"tm"}],"output":{"name":"ordering"}}],[11,"to_timespec","","Convert time to the seconds from January 1, 1970",11,{"inputs":[{"name":"tm"}],"output":{"name":"timespec"}}],[11,"to_local","","Convert time to the local timezone",11,{"inputs":[{"name":"tm"}],"output":{"name":"tm"}}],[11,"to_utc","","Convert time to the UTC",11,{"inputs":[{"name":"tm"}],"output":{"name":"tm"}}],[11,"ctime","","Returns a TmFmt that outputs according to the `asctime` format in ISO\nC, in the local timezone.",11,{"inputs":[{"name":"tm"}],"output":{"name":"tmfmt"}}],[11,"asctime","","Returns a TmFmt that outputs according to the `asctime` format in ISO\nC.",11,{"inputs":[{"name":"tm"}],"output":{"name":"tmfmt"}}],[11,"strftime","","Formats the time according to the format string.",11,{"inputs":[{"name":"tm"},{"name":"str"}],"output":{"name":"result"}}],[11,"rfc822","","Returns a TmFmt that outputs according to RFC 822.",11,{"inputs":[{"name":"tm"}],"output":{"name":"tmfmt"}}],[11,"rfc822z","","Returns a TmFmt that outputs according to RFC 822 with Zulu time.",11,{"inputs":[{"name":"tm"}],"output":{"name":"tmfmt"}}],[11,"rfc3339","","Returns a TmFmt that outputs according to RFC 3339. RFC 3339 is\ncompatible with ISO 8601.",11,{"inputs":[{"name":"tm"}],"output":{"name":"tmfmt"}}],[11,"clone","","",12,{"inputs":[{"name":"parseerror"}],"output":{"name":"parseerror"}}],[11,"fmt","","",12,{"inputs":[{"name":"parseerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",12,{"inputs":[{"name":"parseerror"},{"name":"parseerror"}],"output":{"name":"bool"}}],[11,"ne","","",12,{"inputs":[{"name":"parseerror"},{"name":"parseerror"}],"output":{"name":"bool"}}],[11,"fmt","","",12,{"inputs":[{"name":"parseerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",12,{"inputs":[{"name":"parseerror"}],"output":{"name":"str"}}],[11,"fmt","","",6,{"inputs":[{"name":"tmfmt"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",13,{"inputs":[{"name":"fmt"},{"name":"formatter"}],"output":{"name":"result"}}],[3,"Duration","amethyst::engine","ISO 8601 time duration with nanosecond precision.\nThis also allows for the negative duration; see individual methods for details.",null,null],[3,"Stopwatch","","Useful utility for accurately measuring elapsed time.",null,null],[3,"SteadyTime","","A structure representing a moment in time.",null,null],[11,"new","amethyst_renderer::backend","",14,{"inputs":[],"output":{"name":"backend"}}],[11,"new","amethyst_renderer::frontend","",15,{"inputs":[],"output":{"name":"frontend"}}],[3,"Backend","amethyst::renderer","",null,null],[3,"Frontend","","",null,null]],"paths":[[8,"State"],[3,"Application"],[3,"StateMachine"],[3,"Stopwatch"],[4,"Trans"],[3,"Duration"],[3,"TmFmt"],[3,"SteadyTime"],[3,"Timespec"],[3,"PreciseTime"],[3,"SteadyTime"],[3,"Tm"],[4,"ParseError"],[4,"Fmt"],[3,"Backend"],[3,"Frontend"]]};
searchIndex["amethyst_engine"] = {"doc":"Game engine sitting atop the core libraries.","items":[[11,"weeks","time::duration","Makes a new `Duration` with given number of weeks.\nEquivalent to `Duration::seconds(weeks * 7 * 24 * 60 * 60)` with overflow checks.\nPanics when the duration is out of bounds.",0,{"inputs":[{"name":"i64"}],"output":{"name":"duration"}}],[11,"days","","Makes a new `Duration` with given number of days.\nEquivalent to `Duration::seconds(days * 24 * 60 * 60)` with overflow checks.\nPanics when the duration is out of bounds.",0,{"inputs":[{"name":"i64"}],"output":{"name":"duration"}}],[11,"hours","","Makes a new `Duration` with given number of hours.\nEquivalent to `Duration::seconds(hours * 60 * 60)` with overflow checks.\nPanics when the duration is out of bounds.",0,{"inputs":[{"name":"i64"}],"output":{"name":"duration"}}],[11,"minutes","","Makes a new `Duration` with given number of minutes.\nEquivalent to `Duration::seconds(minutes * 60)` with overflow checks.\nPanics when the duration is out of bounds.",0,{"inputs":[{"name":"i64"}],"output":{"name":"duration"}}],[11,"seconds","","Makes a new `Duration` with given number of seconds.\nPanics when the duration is more than `i64::MAX` milliseconds\nor less than `i64::MIN` milliseconds.",0,{"inputs":[{"name":"i64"}],"output":{"name":"duration"}}],[11,"milliseconds","","Makes a new `Duration` with given number of milliseconds.",0,{"inputs":[{"name":"i64"}],"output":{"name":"duration"}}],[11,"microseconds","","Makes a new `Duration` with given number of microseconds.",0,{"inputs":[{"name":"i64"}],"output":{"name":"duration"}}],[11,"nanoseconds","","Makes a new `Duration` with given number of nanoseconds.",0,{"inputs":[{"name":"i64"}],"output":{"name":"duration"}}],[11,"span","","Runs a closure, returning the duration of time it took to run the\nclosure.",0,{"inputs":[{"name":"f"}],"output":{"name":"duration"}}],[11,"num_weeks","","Returns the total number of whole weeks in the duration.",0,{"inputs":[{"name":"duration"}],"output":{"name":"i64"}}],[11,"num_days","","Returns the total number of whole days in the duration.",0,{"inputs":[{"name":"duration"}],"output":{"name":"i64"}}],[11,"num_hours","","Returns the total number of whole hours in the duration.",0,{"inputs":[{"name":"duration"}],"output":{"name":"i64"}}],[11,"num_minutes","","Returns the total number of whole minutes in the duration.",0,{"inputs":[{"name":"duration"}],"output":{"name":"i64"}}],[11,"num_seconds","","Returns the total number of whole seconds in the duration.",0,{"inputs":[{"name":"duration"}],"output":{"name":"i64"}}],[11,"num_milliseconds","","Returns the total number of whole milliseconds in the duration,",0,{"inputs":[{"name":"duration"}],"output":{"name":"i64"}}],[11,"num_microseconds","","Returns the total number of whole microseconds in the duration,\nor `None` on overflow (exceeding 2^63 microseconds in either direction).",0,{"inputs":[{"name":"duration"}],"output":{"name":"option"}}],[11,"num_nanoseconds","","Returns the total number of whole nanoseconds in the duration,\nor `None` on overflow (exceeding 2^63 nanoseconds in either direction).",0,{"inputs":[{"name":"duration"}],"output":{"name":"option"}}],[11,"checked_add","","Add two durations, returning `None` if overflow occurred.",0,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"option"}}],[11,"checked_sub","","Subtract two durations, returning `None` if overflow occurred.",0,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"option"}}],[11,"min_value","","The minimum possible `Duration`: `i64::MIN` milliseconds.",0,{"inputs":[],"output":{"name":"duration"}}],[11,"max_value","","The maximum possible `Duration`: `i64::MAX` milliseconds.",0,{"inputs":[],"output":{"name":"duration"}}],[11,"zero","","A duration where the stored seconds and nanoseconds are equal to zero.",0,{"inputs":[],"output":{"name":"duration"}}],[11,"is_zero","","Returns `true` if the duration equals `Duration::zero()`.",0,{"inputs":[{"name":"duration"}],"output":{"name":"bool"}}],[11,"fmt","time","",1,{"inputs":[{"name":"tmfmt"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","time::duration","",0,{"inputs":[{"name":"duration"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cmp","","",0,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"option"}}],[11,"lt","","",0,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"bool"}}],[11,"le","","",0,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"bool"}}],[11,"gt","","",0,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"bool"}}],[11,"ge","","",0,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"bool"}}],[11,"eq","","",0,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"bool"}}],[11,"clone","","",0,{"inputs":[{"name":"duration"}],"output":{"name":"duration"}}],[11,"neg","","",0,{"inputs":[{"name":"duration"}],"output":{"name":"duration"}}],[11,"add","","",0,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"duration"}}],[11,"sub","","",0,{"inputs":[{"name":"duration"},{"name":"duration"}],"output":{"name":"duration"}}],[11,"mul","","",0,{"inputs":[{"name":"duration"},{"name":"i32"}],"output":{"name":"duration"}}],[11,"div","","",0,{"inputs":[{"name":"duration"},{"name":"i32"}],"output":{"name":"duration"}}],[11,"fmt","","",0,{"inputs":[{"name":"duration"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","time::sys::inner","",2,{"inputs":[{"name":"steadytime"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",2,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"cmp","","",2,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",2,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"option"}}],[11,"lt","","",2,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"le","","",2,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"gt","","",2,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"ge","","",2,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"clone","","",2,{"inputs":[{"name":"steadytime"}],"output":{"name":"steadytime"}}],[11,"now","","",2,{"inputs":[],"output":{"name":"steadytime"}}],[11,"sub","","",2,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"duration"}}],[11,"sub","","",2,{"inputs":[{"name":"steadytime"},{"name":"duration"}],"output":{"name":"steadytime"}}],[11,"add","","",2,{"inputs":[{"name":"steadytime"},{"name":"duration"}],"output":{"name":"steadytime"}}],[11,"hash","time","",3,null],[11,"fmt","","",3,{"inputs":[{"name":"timespec"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cmp","","",3,{"inputs":[{"name":"timespec"},{"name":"timespec"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",3,{"inputs":[{"name":"timespec"},{"name":"timespec"}],"output":{"name":"option"}}],[11,"lt","","",3,{"inputs":[{"name":"timespec"},{"name":"timespec"}],"output":{"name":"bool"}}],[11,"le","","",3,{"inputs":[{"name":"timespec"},{"name":"timespec"}],"output":{"name":"bool"}}],[11,"gt","","",3,{"inputs":[{"name":"timespec"},{"name":"timespec"}],"output":{"name":"bool"}}],[11,"ge","","",3,{"inputs":[{"name":"timespec"},{"name":"timespec"}],"output":{"name":"bool"}}],[11,"eq","","",3,{"inputs":[{"name":"timespec"},{"name":"timespec"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"timespec"},{"name":"timespec"}],"output":{"name":"bool"}}],[11,"clone","","",3,{"inputs":[{"name":"timespec"}],"output":{"name":"timespec"}}],[11,"new","","",3,{"inputs":[{"name":"i64"},{"name":"i32"}],"output":{"name":"timespec"}}],[11,"add","","",3,{"inputs":[{"name":"timespec"},{"name":"duration"}],"output":{"name":"timespec"}}],[11,"sub","","",3,{"inputs":[{"name":"timespec"},{"name":"duration"}],"output":{"name":"timespec"}}],[11,"sub","","",3,{"inputs":[{"name":"timespec"},{"name":"timespec"}],"output":{"name":"duration"}}],[11,"clone","","",4,{"inputs":[{"name":"precisetime"}],"output":{"name":"precisetime"}}],[11,"now","","Returns a `PreciseTime` representing the current moment in time.",4,{"inputs":[],"output":{"name":"precisetime"}}],[11,"to","","Returns a `Duration` representing the span of time from the value of\n`self` to the value of `later`.",4,{"inputs":[{"name":"precisetime"},{"name":"precisetime"}],"output":{"name":"duration"}}],[11,"fmt","","",5,{"inputs":[{"name":"steadytime"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",5,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"cmp","","",5,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",5,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"option"}}],[11,"lt","","",5,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"le","","",5,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"gt","","",5,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"ge","","",5,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"bool"}}],[11,"clone","","",5,{"inputs":[{"name":"steadytime"}],"output":{"name":"steadytime"}}],[11,"now","","Returns a `SteadyTime` representing the current moment in time.",5,{"inputs":[],"output":{"name":"steadytime"}}],[11,"fmt","","",5,{"inputs":[{"name":"steadytime"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"sub","","",5,{"inputs":[{"name":"steadytime"},{"name":"steadytime"}],"output":{"name":"duration"}}],[11,"sub","","",5,{"inputs":[{"name":"steadytime"},{"name":"duration"}],"output":{"name":"steadytime"}}],[11,"add","","",5,{"inputs":[{"name":"steadytime"},{"name":"duration"}],"output":{"name":"steadytime"}}],[11,"hash","","",6,null],[11,"fmt","","",6,{"inputs":[{"name":"tm"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",6,{"inputs":[{"name":"tm"},{"name":"tm"}],"output":{"name":"bool"}}],[11,"ne","","",6,{"inputs":[{"name":"tm"},{"name":"tm"}],"output":{"name":"bool"}}],[11,"clone","","",6,{"inputs":[{"name":"tm"}],"output":{"name":"tm"}}],[11,"add","","The resulting Tm is in UTC.",6,{"inputs":[{"name":"tm"},{"name":"duration"}],"output":{"name":"tm"}}],[11,"sub","","The resulting Tm is in UTC.",6,{"inputs":[{"name":"tm"},{"name":"duration"}],"output":{"name":"tm"}}],[11,"sub","","",6,{"inputs":[{"name":"tm"},{"name":"tm"}],"output":{"name":"duration"}}],[11,"partial_cmp","","",6,{"inputs":[{"name":"tm"},{"name":"tm"}],"output":{"name":"option"}}],[11,"cmp","","",6,{"inputs":[{"name":"tm"},{"name":"tm"}],"output":{"name":"ordering"}}],[11,"to_timespec","","Convert time to the seconds from January 1, 1970",6,{"inputs":[{"name":"tm"}],"output":{"name":"timespec"}}],[11,"to_local","","Convert time to the local timezone",6,{"inputs":[{"name":"tm"}],"output":{"name":"tm"}}],[11,"to_utc","","Convert time to the UTC",6,{"inputs":[{"name":"tm"}],"output":{"name":"tm"}}],[11,"ctime","","Returns a TmFmt that outputs according to the `asctime` format in ISO\nC, in the local timezone.",6,{"inputs":[{"name":"tm"}],"output":{"name":"tmfmt"}}],[11,"asctime","","Returns a TmFmt that outputs according to the `asctime` format in ISO\nC.",6,{"inputs":[{"name":"tm"}],"output":{"name":"tmfmt"}}],[11,"strftime","","Formats the time according to the format string.",6,{"inputs":[{"name":"tm"},{"name":"str"}],"output":{"name":"result"}}],[11,"rfc822","","Returns a TmFmt that outputs according to RFC 822.",6,{"inputs":[{"name":"tm"}],"output":{"name":"tmfmt"}}],[11,"rfc822z","","Returns a TmFmt that outputs according to RFC 822 with Zulu time.",6,{"inputs":[{"name":"tm"}],"output":{"name":"tmfmt"}}],[11,"rfc3339","","Returns a TmFmt that outputs according to RFC 3339. RFC 3339 is\ncompatible with ISO 8601.",6,{"inputs":[{"name":"tm"}],"output":{"name":"tmfmt"}}],[11,"clone","","",7,{"inputs":[{"name":"parseerror"}],"output":{"name":"parseerror"}}],[11,"fmt","","",7,{"inputs":[{"name":"parseerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",7,{"inputs":[{"name":"parseerror"},{"name":"parseerror"}],"output":{"name":"bool"}}],[11,"ne","","",7,{"inputs":[{"name":"parseerror"},{"name":"parseerror"}],"output":{"name":"bool"}}],[11,"fmt","","",7,{"inputs":[{"name":"parseerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",7,{"inputs":[{"name":"parseerror"}],"output":{"name":"str"}}],[11,"fmt","","",1,{"inputs":[{"name":"tmfmt"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"fmt"},{"name":"formatter"}],"output":{"name":"result"}}],[3,"Duration","amethyst_engine","ISO 8601 time duration with nanosecond precision.\nThis also allows for the negative duration; see individual methods for details.",null,null],[3,"SteadyTime","","A structure representing a moment in time.",null,null],[3,"Application","","User-friendly facade for building games. Manages main loop.",null,null],[3,"StateMachine","","A simple stack-based state machine (pushdown automaton).",null,null],[3,"Stopwatch","","Useful utility for accurately measuring elapsed time.",null,null],[4,"Trans","","Types of state transitions.",null,null],[13,"None","","Continue as normal.",9,null],[13,"Pop","","Remove the active state and resume the next state on the stack or stop if there are none.",9,null],[13,"Push","","Pause the active state and push a new state onto the stack.",9,null],[13,"Switch","","Remove the current state on the stack and insert a different one.",9,null],[13,"Quit","","Stop and remove all states and shut down the engine.",9,null],[11,"new","","Creates a new Application with the given initial game state.",10,{"inputs":[{"name":"t"}],"output":{"name":"application"}}],[11,"run","","Starts the application and manages the game loop.",10,{"inputs":[{"name":"application"}],"output":null}],[11,"new","","",11,{"inputs":[{"name":"t"}],"output":{"name":"statemachine"}}],[11,"is_running","","Checks whether the state machine is running.",11,{"inputs":[{"name":"statemachine"}],"output":{"name":"bool"}}],[11,"start","","Initializes the state machine.\n# Panics\nPanics if no states are present in the stack.",11,{"inputs":[{"name":"statemachine"}],"output":null}],[11,"handle_events","","Passes a vector of events to the active state to handle.",11,null],[11,"fixed_update","","Updates the currently active state at a steady, fixed interval.",11,{"inputs":[{"name":"statemachine"},{"name":"duration"}],"output":null}],[11,"update","","Updates the currently active state immediately.",11,{"inputs":[{"name":"statemachine"},{"name":"duration"}],"output":null}],[11,"new","","",12,{"inputs":[],"output":{"name":"stopwatch"}}],[11,"elapsed","","Retrieves the elapsed time.",12,{"inputs":[{"name":"stopwatch"}],"output":{"name":"duration"}}],[11,"restart","","Stops, resets, and starts the stopwatch again.",12,{"inputs":[{"name":"stopwatch"}],"output":null}],[11,"start","","Starts, or resumes, measuring elapsed time. If the stopwatch has been\nstarted and stopped before, the new results are compounded onto the\nexisting elapsed time value.",12,{"inputs":[{"name":"stopwatch"}],"output":null}],[11,"stop","","Stops measuring elapsed time.",12,{"inputs":[{"name":"stopwatch"}],"output":null}],[11,"reset","","Clears the current elapsed time value.",12,{"inputs":[{"name":"stopwatch"}],"output":null}],[8,"State","","A trait which defines game states that can be used by the state machine.",null,null],[11,"on_start","","Executed when the game state begins.",13,{"inputs":[{"name":"state"}],"output":null}],[11,"on_stop","","Executed when the game state exits.",13,{"inputs":[{"name":"state"}],"output":null}],[11,"on_pause","","Executed when a different game state is pushed onto the stack.",13,{"inputs":[{"name":"state"}],"output":null}],[11,"on_resume","","Executed when the application returns to this game state once again.",13,{"inputs":[{"name":"state"}],"output":null}],[11,"handle_events","","Executed on every frame before updating, for use in reacting to events.",13,null],[11,"fixed_update","","Executed repeatedly at stable, predictable intervals (1/60th of a second\nby default).",13,{"inputs":[{"name":"state"},{"name":"duration"}],"output":{"name":"trans"}}],[11,"update","","Executed on every frame immediately, as fast as the engine will allow.",13,{"inputs":[{"name":"state"},{"name":"duration"}],"output":{"name":"trans"}}],[11,"on_start","","Executed when the game state begins.",13,{"inputs":[{"name":"state"}],"output":null}],[11,"on_stop","","Executed when the game state exits.",13,{"inputs":[{"name":"state"}],"output":null}],[11,"on_pause","","Executed when a different game state is pushed onto the stack.",13,{"inputs":[{"name":"state"}],"output":null}],[11,"on_resume","","Executed when the application returns to this game state once again.",13,{"inputs":[{"name":"state"}],"output":null}],[11,"handle_events","","Executed on every frame before updating, for use in reacting to events.",13,null],[11,"fixed_update","","Executed repeatedly at stable, predictable intervals (1/60th of a second\nby default).",13,{"inputs":[{"name":"state"},{"name":"duration"}],"output":{"name":"trans"}}],[11,"update","","Executed on every frame immediately, as fast as the engine will allow.",13,{"inputs":[{"name":"state"},{"name":"duration"}],"output":{"name":"trans"}}]],"paths":[[3,"Duration"],[3,"TmFmt"],[3,"SteadyTime"],[3,"Timespec"],[3,"PreciseTime"],[3,"SteadyTime"],[3,"Tm"],[4,"ParseError"],[4,"Fmt"],[4,"Trans"],[3,"Application"],[3,"StateMachine"],[3,"Stopwatch"],[8,"State"]]};
initSearch(searchIndex);
