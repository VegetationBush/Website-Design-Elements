local booleans = {false, true}
local bvl = {[false] = 0, [true] = 1}

print("in: a3 a2 a1 a0    out: b3 b2 b1 b0     val")
for _, a3 in booleans do
    for _, a2 in booleans do
        for _, a1 in booleans do
            for _, a0 in booleans do
                local b0 =
                    a3
                    or not a2 and a0
                    or not a1
                local b1 =
                    not a3 and not a2 and not a1 and not a0
                    or a3 and a2
                    or a3 and a1
                    or a3 and a0
                    or a2 and a1
                local b2 =
                    a3 and a2
                    or a3 and a1
                    or a3 and not a0
                    or not a2 and a1 and not a0
                    or a2 and not a1 and not a0
                    or a2 and a1 and a0
                local b3 =
                    a3 and a2
                    or a3 and a1
                    or a2 and not a1 and a0
                print(
                    string.format(
                        "    %s  %s  %s  %s          %s  %s  %s  %s      %s",
                        bvl[a3], bvl[a2], bvl[a1], bvl[a0],
                        bvl[b3], bvl[b2], bvl[b1], bvl[b0],
                        (b0 and 1 or 0) + (b1 and 2 or 0) + (b2 and 4 or 0) + (b3 and 8 or 0)
                    )
                )
            end
        end
    end
end