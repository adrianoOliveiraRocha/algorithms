#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# 15, -2, 2, -8, 1, 7, 10, 23
class Solution:
    def maxLen(self, n, arr):
        dic = {}
        max_len = 0
        curr_sum = 0
        for i in range(n):
            curr_sum += arr[i]
            if(curr_sum == 0):
                max_len = i+1
            if curr_sum in dic:
                print(curr_sum, 'in dic')
                print(max_len, i, dic[curr_sum], i-dic[curr_sum], "\n")
                max_len = max(max_len, i-dic[curr_sum])
            else:
                dic[curr_sum] = i
        return max_len