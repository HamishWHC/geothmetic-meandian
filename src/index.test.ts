import {geothmeticMeandian} from "./index"

test('calculates the geothmetic meandian', () => {
    // Default convergence threshold.
    expect(geothmeticMeandian([1, 1, 2, 3, 5]).toFixed(3)).toBe("2.089");
    expect(geothmeticMeandian([3, 1, 4, 1, 5, 9]).toFixed(3)).toBe("3.415");
    expect(geothmeticMeandian([482, 3743, 681, 273, 472, 65, 821, 64780, 23648, 23]).toFixed(3)).toBe("1823.063");
    
    // Higher convergence threshold.
    expect(geothmeticMeandian([1, 1, 2, 3, 5], 0.000001).toFixed(6)).toBe("2.089058");
    expect(geothmeticMeandian([3, 1, 4, 1, 5, 9], 0.000001).toFixed(6)).toBe("3.415193");
    expect(geothmeticMeandian([482, 3743, 681, 273, 472, 65, 821, 64780, 23648, 23], 0.000001).toFixed(6)).toBe("1823.062603");
});