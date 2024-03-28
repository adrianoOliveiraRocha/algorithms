#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Nov  6 07:02:17 2023

@author: adriano
"""
from main import Solution
class Test:
    def __init__(self):
        self.test1()
    
    def test1(self):
        n = 8
        arr = [15, -2, 2, -8, 1, 7, 10, 23]
        s = Solution()
        print(s.maxLen(n, arr))
        
Test()