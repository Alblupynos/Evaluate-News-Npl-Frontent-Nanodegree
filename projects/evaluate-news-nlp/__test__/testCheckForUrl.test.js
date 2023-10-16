import { checkForUrl } from "../src/client/js/urlChecker";

describe("Testing the url functionality", () => {
    test("Testing the checkForUrl() function for true", () => {
        expect(checkForUrl("https://example.com")).toBe(true);
    })
    test("Testing the checkForUrl() function for false", () => {
        expect(checkForUrl("False")).toBe(false);
    })
});