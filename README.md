### Hexlet tests and linter status:
[![Actions Status](https://github.com/xAleksandrGorbunovx/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/xAleksandrGorbunovx/frontend-project-46/actions)

[![Actions Status](https://github.com/xAleksandrGorbunovx/frontend-project-46/actions/workflows/node-check.yml/badge.svg)](https://github.com/xAleksandrGorbunovx/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/804241963446cf5b0b5c/maintainability)](https://codeclimate.com/github/xAleksandrGorbunovx/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/804241963446cf5b0b5c/test_coverage)](https://codeclimate.com/github/xAleksandrGorbunovx/frontend-project-46/test_coverage)

# **"Hexlet project difference"**

#### The program is designed to compare two files, determine similarities and differences.
**Supports the following file formats for comparison:**
* json
* yaml
* yml


**The program outputs data in three output formats:**
* stylish (default output format)
* plain
* json

## Installation

_СLI_  

```git clone git@github.com:xAleksandrGorbunovx/frontend-project-46.git```  

```cd frontend-project-46```  

``` make install ```

## Usage

_СLI_  

``` gendiff -h ```   

    Usage: gendiff [options] <filepath1> <filepath2>

    Compares two configuration files and shows a difference.

    Options:
        -V, --version        output the version number
        -f, --format [type]  output format
        -h, --help           output usage information  



e.g.: ```node bin/gendiff -f stylish file1.json file2.json```  

Example of output in stylish format

    {
        common: {
        + follow: false
            setting1: Value 1
        - setting2: 200
        - setting3: true
        + setting3: null
        + setting4: blah blah
        + setting5: {
                key5: value5
            }
            setting6: {
                doge: {
                - wow:
                + wow: so much
                }
                key: value
            + ops: vops
            }
        }
        group1: {
        - baz: bas
        + baz: bars
            foo: bar
        - nest: {
                key: value
            }
        + nest: str
        }
    - group2: {
            abc: 12345
            deep: {
                id: 45
            }
        }
    + group3: {
            deep: {
                id: {
                    number: 45
                }
            }
            fee: 100500
        }
    }

The example uses these fixtures  

***file1.json:***  

    {
    "common": {
        "setting1": "Value 1",
        "setting2": 200,
        "setting3": true,
        "setting6": {
        "key": "value",
        "doge": {
            "wow": ""
        }
        }
    },
    "group1": {
        "baz": "bas",
        "foo": "bar",
        "nest": {
        "key": "value"
        }
    },
    "group2": {
        "abc": 12345,
        "deep": {
        "id": 45
        }
    }
    }

***file2.json:***  

    {
    "common": {
        "follow": false,
        "setting1": "Value 1",
        "setting3": null,
        "setting4": "blah blah",
        "setting5": {
        "key5": "value5"
        },
        "setting6": {
        "key": "value",
        "ops": "vops",
        "doge": {
            "wow": "so much"
        }
        }
    },
    "group1": {
        "foo": "bar",
        "baz": "bars",
        "nest": "str"
    },
    "group3": {
        "deep": {
        "id": {
            "number": 45
        }
        },
        "fee": 100500
    }
    }

**Recording of viewing options and running the program.**
   [![asciicast](https://asciinema.org/a/rogaXWypa7pmresRphOH8OvLB.svg)](https://asciinema.org/a/rogaXWypa7pmresRphOH8OvLB)  


### Recording the launch of a program with information output in the default stylish format.  
   [![asciicast](https://asciinema.org/a/4d0picHFn7VkOIQ5apc.svg)](https://asciinema.org/a/4d0picHFn7VkOIQ5apc) 
   