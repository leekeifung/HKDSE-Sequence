// js/data.js

const questionsData = [
    // ---------------------------------------------------------
    // 1. 2014DSE Math I Q16
    // ---------------------------------------------------------
    {
        id: "2014-p1-q16",
        year: "2014",
        paper: "Paper 1",
        qNum: "Q16",
        marks: 4,
        type: "long",
        questionText: `
            <p>In Figure 5, the 1st pattern consists of 3 dots. For any positive integer \\( n \\), the \\( (n + 1) \\)-th pattern is formed by adding 2 dots to the \\( n \\)-th pattern. Find the least value of \\( m \\) such that the total number of dots in the first \\( m \\) patterns exceeds 6888.</p>
            <div class="flex flex-col items-center my-6 p-4 bg-gray-100 rounded-lg">
                <svg width="300" height="80" viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
                    <!-- Pattern 1 -->
                    <circle cx="15" cy="20" r="4" fill="#1f2937"/><circle cx="5" cy="40" r="4" fill="#1f2937"/><circle cx="25" cy="40" r="4" fill="#1f2937"/>
                    <path d="M 40 30 L 60 30" stroke="#1f2937" stroke-width="2" marker-end="url(#arrow)"/>
                    <!-- Pattern 2 -->
                    <circle cx="95" cy="20" r="4" fill="#1f2937"/><circle cx="115" cy="20" r="4" fill="#1f2937"/><circle cx="85" cy="40" r="4" fill="#1f2937"/><circle cx="105" cy="40" r="4" fill="#1f2937"/><circle cx="125" cy="40" r="4" fill="#1f2937"/>
                    <path d="M 140 30 L 160 30" stroke="#1f2937" stroke-width="2" marker-end="url(#arrow)"/>
                    <!-- Pattern 3 -->
                    <circle cx="195" cy="20" r="4" fill="#1f2937"/><circle cx="215" cy="20" r="4" fill="#1f2937"/><circle cx="235" cy="20" r="4" fill="#1f2937"/><circle cx="185" cy="40" r="4" fill="#1f2937"/><circle cx="205" cy="40" r="4" fill="#1f2937"/><circle cx="225" cy="40" r="4" fill="#1f2937"/><circle cx="245" cy="40" r="4" fill="#1f2937"/>
                    <path d="M 260 30 L 280 30" stroke="#1f2937" stroke-width="2" marker-end="url(#arrow)"/>
                    <text x="290" y="35" font-weight="bold" font-size="20">...</text>
                    <text x="125" y="75" font-family="sans-serif" class="text-gray-600">Figure 5</text>
                    <defs>
                        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#1f2937" />
                        </marker>
                    </defs>
                </svg>
            </div>
        `,
        steps: [
            "Let \\( T(n) \\) be the number of dots in the \\( n \\)-th pattern. This forms an arithmetic sequence with first term \\( a = 3 \\) and common difference \\( d = 2 \\).",
            "The sum of the first \\( m \\) patterns is \\( S(m) = \\frac{m}{2} [2a + (m-1)d] \\).",
            "Substitute the values: \\( S(m) = \\frac{m}{2} [2(3) + (m-1)2] = \\frac{m}{2} [6 + 2m - 2] = m(m + 2) = m^2 + 2m \\).",
            "We need \\( S(m) > 6888 \\), which gives the inequality \\( m^2 + 2m - 6888 > 0 \\).",
            "Factorizing the quadratic equation: \\( (m - 82)(m + 84) > 0 \\).",
            "Since \\( m \\) must be a positive integer, we take \\( m > 82 \\).",
            "<strong>Therefore, the least value of \\( m \\) is 83.</strong>"
        ]
    },

    // ---------------------------------------------------------
    // 2. 2016DSE Math I Q17
    // ---------------------------------------------------------
    {
        id: "2016-p1-q17",
        year: "2016",
        paper: "Paper 1",
        qNum: "Q17",
        marks: 5,
        type: "long",
        questionText: `
            <p>The 1st term and the 38th term of an arithmetic sequence are 666 and 555 respectively. Find</p>
            <ol class="list-[lower-alpha] pl-5 mt-2 space-y-2">
                <li>the common difference of the sequence, <span class="float-right text-gray-500">(2 marks)</span></li>
                <li>the greatest value of \\( n \\) such that the sum of the first \\( n \\) terms of the sequence is positive. <span class="float-right text-gray-500">(3 marks)</span></li>
            </ol>
        `,
        steps: [
            "<span class='font-bold text-blue-700'>(a)</span> Let \\( a \\) be the 1st term and \\( d \\) be the common difference. We are given \\( a = 666 \\).",
            "The 38th term is \\( T(38) = a + 37d = 555 \\).",
            "Substitute \\( a \\): \\( 666 + 37d = 555 \\implies 37d = -111 \\implies d = -3 \\).",
            "<strong>The common difference is -3.</strong>",
            "<span class='font-bold text-blue-700'>(b)</span> The sum of the first \\( n \\) terms is \\( S(n) = \\frac{n}{2}[2(666) + (n-1)(-3)] \\).",
            "We need \\( S(n) > 0 \\). Since \\( n > 0 \\), we can divide both sides by \\( \\frac{n}{2} \\):<br> \\( 1332 - 3n + 3 > 0 \\)",
            "\\( 1335 > 3n \\implies n < 445 \\).",
            "<strong>Therefore, the greatest value of \\( n \\) is 444.</strong>"
        ]
    },

    // ---------------------------------------------------------
    // 3. 2018DSE Math I Q16
    // ---------------------------------------------------------
    {
        id: "2018-p1-q16",
        year: "2018",
        paper: "Paper 1",
        qNum: "Q16",
        marks: 5,
        type: "long",
        questionText: `
            <p>The 3rd term and the 4th term of a geometric sequence are 720 and 864 respectively.</p>
            <ol class="list-[lower-alpha] pl-5 mt-2 space-y-2">
                <li>Find the 1st term of the sequence. <span class="float-right text-gray-500">(2 marks)</span></li>
                <li>Find the greatest value of \\( n \\) such that the sum of the \\( (n + 1) \\)-th term and the \\( (2n + 1) \\)-th term is less than \\( 5 \\times 10^{14} \\). <span class="float-right text-gray-500">(3 marks)</span></li>
            </ol>
        `,
        steps: [
            "<span class='font-bold text-blue-700'>(a)</span> Let \\( a \\) be the 1st term and \\( r \\) be the common ratio. We have \\( ar^2 = 720 \\) and \\( ar^3 = 864 \\).",
            "Divide the equations: \\( r = \\frac{ar^3}{ar^2} = \\frac{864}{720} = 1.2 \\).",
            "Substitute \\( r \\) back: \\( a(1.2)^2 = 720 \\implies a(1.44) = 720 \\implies a = 500 \\).",
            "<strong>The 1st term is 500.</strong>",
            "<span class='font-bold text-blue-700'>(b)</span> The \\( (n+1) \\)-th term is \\( ar^n \\) and the \\( (2n+1) \\)-th term is \\( ar^{2n} \\).",
            "We need \\( 500(1.2^n) + 500(1.2^{2n}) < 5 \\times 10^{14} \\).",
            "Divide by 500: \\( 1.2^{2n} + 1.2^n < 10^{12} \\).",
            "Let \\( x = 1.2^n \\). The inequality is \\( x^2 + x - 10^{12} < 0 \\).",
            "Using the quadratic formula, the positive root is \\( x \\approx \\sqrt{10^{12}} = 10^6 \\).",
            "So, \\( 1.2^n < 10^6 \\implies n \\log(1.2) < 6 \\implies n < \\frac{6}{\\log(1.2)} \\approx 75.76 \\).",
            "<strong>Therefore, the greatest value of \\( n \\) is 75.</strong>"
        ]
    },

    // ---------------------------------------------------------
    // 4. 2020DSE Math I Q16
    // ---------------------------------------------------------
    {
        id: "2020-p1-q16",
        year: "2020",
        paper: "Paper 1",
        qNum: "Q16",
        marks: 5,
        type: "long",
        questionText: `
            <p>The 3rd term and the 6th term of a geometric sequence are 144 and 486 respectively.</p>
            <ol class="list-[lower-alpha] pl-5 mt-2 space-y-2">
                <li>Find the 1st term of the sequence. <span class="float-right text-gray-500">(2 marks)</span></li>
                <li>Find the least value of \\( n \\) such that the sum of the first \\( n \\) terms of the sequence is greater than \\( 8 \\times 10^{18} \\). <span class="float-right text-gray-500">(3 marks)</span></li>
            </ol>
        `,
        steps: [
            "<span class='font-bold text-blue-700'>(a)</span> Let \\( a \\) be the 1st term and \\( r \\) be the common ratio. \\( ar^2 = 144 \\) and \\( ar^5 = 486 \\).",
            "Divide the equations: \\( r^3 = \\frac{486}{144} = \\frac{27}{8} \\implies r = \\frac{3}{2} = 1.5 \\).",
            "Substitute \\( r \\): \\( a(1.5)^2 = 144 \\implies a(2.25) = 144 \\implies a = 64 \\).",
            "<strong>The 1st term is 64.</strong>",
            "<span class='font-bold text-blue-700'>(b)</span> The sum of the first \\( n \\) terms is \\( S(n) = \\frac{a(r^n - 1)}{r - 1} \\).",
            "We need \\( \\frac{64(1.5^n - 1)}{1.5 - 1} > 8 \\times 10^{18} \\).",
            "\\( \\frac{64(1.5^n - 1)}{0.5} > 8 \\times 10^{18} \\implies 128(1.5^n - 1) > 8 \\times 10^{18} \\).",
            "\\( 1.5^n - 1 > 6.25 \\times 10^{16} \\implies 1.5^n > 6.25 \\times 10^{16} \\).",
            "Take logarithms: \\( n \\log(1.5) > \\log(6.25 \\times 10^{16}) \\implies n > \\frac{16.79588}{0.17609} \\approx 95.38 \\).",
            "<strong>Therefore, the least value of \\( n \\) is 96.</strong>"
        ]
    },

    // ---------------------------------------------------------
    // 5. 2015DSE Math I Q17
    // ---------------------------------------------------------
    {
        id: "2015-p1-q17",
        year: "2015",
        paper: "Paper 1",
        qNum: "Q17",
        marks: 5,
        type: "long",
        questionText: `
            <p>For any positive integer \\( n \\), let \\( A(n) = 4n - 5 \\) and \\( B(n) = 10^{4n-5} \\).</p>
            <ol class="list-[lower-alpha] pl-5 mt-2 space-y-2">
                <li>Express \\( A(1) + A(2) + A(3) + \\dots + A(n) \\) in terms of \\( n \\). <span class="float-right text-gray-500">(2 marks)</span></li>
                <li>Find the greatest value of \\( n \\) such that \\( \\log(B(1)B(2)B(3)\\dots B(n)) \\le 8000 \\). <span class="float-right text-gray-500">(3 marks)</span></li>
            </ol>
        `,
        steps: [
            "<span class='font-bold text-blue-700'>(a)</span> \\( A(n) = 4n - 5 \\) is an arithmetic sequence with first term \\( A(1) = -1 \\) and common difference \\( d = 4 \\).",
            "The sum is \\( S(n) = \\frac{n}{2}[2(-1) + (n-1)(4)] \\).",
            "\\( S(n) = \\frac{n}{2}[-2 + 4n - 4] = \\frac{n}{2}[4n - 6] = 2n^2 - 3n \\).",
            "<strong>So, \\( A(1) + \\dots + A(n) = 2n^2 - 3n \\).</strong>",
            "<span class='font-bold text-blue-700'>(b)</span> Consider \\( \\log(B(1)B(2)\\dots B(n)) \\). By log properties, this equals \\( \\log(B(1)) + \\log(B(2)) + \\dots + \\log(B(n)) \\).",
            "Since \\( B(n) = 10^{A(n)} \\), \\( \\log(B(n)) = A(n) \\).",
            "Thus, the inequality becomes \\( A(1) + A(2) + \\dots + A(n) \\le 8000 \\).",
            "Substitute the result from (a): \\( 2n^2 - 3n \\le 8000 \\implies 2n^2 - 3n - 8000 \\le 0 \\).",
            "Using the quadratic formula: \\( n = \\frac{3 \\pm \\sqrt{9 - 4(2)(-8000)}}{4} = \\frac{3 \\pm \\sqrt{64009}}{4} \\approx \\frac{3 \\pm 253}{4} \\).",
            "The positive root is \\( n \\approx 64 \\).",
            "<strong>Therefore, the greatest value of \\( n \\) is 64.</strong>"
        ]
    },

    // ---------------------------------------------------------
    // 6. 2021DSE Math I Q17
    // ---------------------------------------------------------
    {
        id: "2021-p1-q17",
        year: "2021",
        paper: "Paper 1",
        qNum: "Q17",
        marks: 7,
        type: "long",
        questionText: `
            <p>Let \\( A(n) \\) be the \\( n \\)-th term of an arithmetic sequence. It is given that \\( A(5) = 26 \\) and \\( A(12) = 61 \\).</p>
            <ol class="list-[lower-alpha] pl-5 mt-2 space-y-2">
                <li>Find \\( A(1) \\). <span class="float-right text-gray-500">(2 marks)</span></li>
                <li>Suppose that \\( \\log_2 G(n) = A(n) \\) for any positive integer \\( n \\).<br>
                Find the greatest value of \\( k \\) such that \\( \\log_8(G(1)G(2)G(3)\\dots G(k)) < 999 \\). <span class="float-right text-gray-500">(5 marks)</span></li>
            </ol>
        `,
        steps: [
            "<span class='font-bold text-blue-700'>(a)</span> Let \\( a \\) be \\( A(1) \\) and \\( d \\) be the common difference. \\( a + 4d = 26 \\) and \\( a + 11d = 61 \\).",
            "Subtracting the equations: \\( 7d = 35 \\implies d = 5 \\).",
            "Substitute \\( d \\): \\( a + 4(5) = 26 \\implies a = 6 \\).",
            "<strong>Therefore, \\( A(1) = 6 \\).</strong>",
            "<span class='font-bold text-blue-700'>(b)</span> We are given \\( \\log_2 G(n) = A(n) \\).",
            "Consider \\( \\log_8(G(1)G(2)\\dots G(k)) \\). Using change of base: \\( \\log_8(X) = \\frac{\\log_2(X)}{\\log_2(8)} = \\frac{1}{3}\\log_2(X) \\).",
            "So, \\( \\frac{1}{3} [\\log_2 G(1) + \\dots + \\log_2 G(k)] < 999 \\).",
            "\\( \\frac{1}{3} [A(1) + A(2) + \\dots + A(k)] < 999 \\implies S(k) < 2997 \\).",
            "The sum of the arithmetic sequence is \\( S(k) = \\frac{k}{2}[2(6) + (k-1)(5)] = \\frac{k}{2}[5k + 7] \\).",
            "\\( \\frac{5k^2 + 7k}{2} < 2997 \\implies 5k^2 + 7k - 5994 < 0 \\).",
            "Using the quadratic formula: \\( k = \\frac{-7 \\pm \\sqrt{49 - 4(5)(-5994)}}{10} = \\frac{-7 \\pm \\sqrt{119929}}{10} \\approx \\frac{-7 \\pm 346.3}{10} \\).",
            "The positive root is \\( k \\approx 33.93 \\).",
            "<strong>Therefore, the greatest value of \\( k \\) is 33.</strong>"
        ]
    },

    // ---------------------------------------------------------
    // 7. 2017DSE Math I Q16
    // ---------------------------------------------------------
    {
        id: "2017-p1-q16",
        year: "2017",
        paper: "Paper 1",
        qNum: "Q16",
        marks: 4,
        type: "long",
        questionText: `
            <p>A city adopts a plan to import water from another city. It is given that the volume of water imported in the 1st year since the start of the plan is \\( 1.5 \\times 10^7 \\text{ m}^3 \\) and in subsequent years, the volume of water imported each year is 10% less than the volume of water imported in the previous year.</p>
            <ol class="list-[lower-alpha] pl-5 mt-2 space-y-2">
                <li>Find the total volume of water imported in the first 20 years since the start of the plan. <span class="float-right text-gray-500">(2 marks)</span></li>
                <li>Someone claims that the total volume of water imported since the start of the plan will not exceed \\( 1.6 \\times 10^8 \\text{ m}^3 \\). Do you agree? Explain your answer. <span class="float-right text-gray-500">(2 marks)</span></li>
            </ol>
        `,
        steps: [
            "<span class='font-bold text-blue-700'>(a)</span> The volume of water imported forms a geometric sequence with \\( a = 1.5 \\times 10^7 \\) and \\( r = 1 - 0.10 = 0.9 \\).",
            "The sum of the first 20 years is \\( S(20) = \\frac{a(1 - r^{20})}{1 - r} \\).",
            "\\( S(20) = \\frac{1.5 \\times 10^7 (1 - 0.9^{20})}{1 - 0.9} = \\frac{1.5 \\times 10^7 (1 - 0.1215766)}{0.1} \\).",
            "<strong>The total volume is approximately \\( 1.3176 \\times 10^8 \\text{ m}^3 \\) (or \\( 131,763,492 \\text{ m}^3 \\)).</strong>",
            "<span class='font-bold text-blue-700'>(b)</span> The total volume imported over an infinite number of years is the sum to infinity \\( S(\\infty) \\).",
            "\\( S(\\infty) = \\frac{a}{1 - r} = \\frac{1.5 \\times 10^7}{1 - 0.9} = \\frac{1.5 \\times 10^7}{0.1} = 1.5 \\times 10^8 \\text{ m}^3 \\).",
            "Since the maximum possible total volume is \\( 1.5 \\times 10^8 \\text{ m}^3 \\), which is strictly less than \\( 1.6 \\times 10^8 \\text{ m}^3 \\).",
            "<strong>Therefore, I agree with the claim.</strong>"
        ]
    },

    // ---------------------------------------------------------
    // 8. 2019DSE Math I Q16
    // ---------------------------------------------------------
    {
        id: "2019-p1-q16",
        year: "2019",
        paper: "Paper 1",
        qNum: "Q16",
        marks: 6,
        type: "long",
        questionText: `
            <p>Let \\( \\alpha \\) and \\( \\beta \\) be real numbers such that</p>
            \\[ \\begin{cases} \\beta = 5\\alpha - 18 \\\\ \\beta = \\alpha^2 - 13\\alpha + 63 \\end{cases} \\]
            <ol class="list-[lower-alpha] pl-5 mt-2 space-y-2">
                <li>Find \\( \\alpha \\) and \\( \\beta \\). <span class="float-right text-gray-500">(2 marks)</span></li>
                <li>The 1st term and the 2nd term of an arithmetic sequence are \\( \\log \\alpha \\) and \\( \\log \\beta \\) respectively. Find the least value of \\( n \\) such that the sum of the first \\( n \\) terms of the sequence is greater than 888. <span class="float-right text-gray-500">(4 marks)</span></li>
            </ol>
        `,
        steps: [
            "<span class='font-bold text-blue-700'>(a)</span> Equate the two expressions for \\( \\beta \\): \\( \\alpha^2 - 13\\alpha + 63 = 5\\alpha - 18 \\).",
            "Rearrange into a quadratic equation: \\( \\alpha^2 - 18\\alpha + 81 = 0 \\).",
            "Factorize: \\( (\\alpha - 9)^2 = 0 \\implies \\alpha = 9 \\).",
            "Substitute \\( \\alpha \\) back to find \\( \\beta \\): \\( \\beta = 5(9) - 18 = 27 \\).",
            "<strong>So, \\( \\alpha = 9 \\) and \\( \\beta = 27 \\).</strong>",
            "<span class='font-bold text-blue-700'>(b)</span> The 1st term is \\( a = \\log 9 \\) and the 2nd term is \\( \\log 27 \\).",
            "The common difference is \\( d = \\log 27 - \\log 9 = \\log(\\frac{27}{9}) = \\log 3 \\).",
            "Note that \\( a = \\log 9 = 2\\log 3 \\).",
            "The sum of the first \\( n \\) terms is \\( S(n) = \\frac{n}{2}[2(2\\log 3) + (n-1)(\\log 3)] = \\frac{n}{2}[4\\log 3 + n\\log 3 - \\log 3] = \\frac{n(n+3)}{2} \\log 3 \\).",
            "We need \\( \\frac{n(n+3)}{2} \\log 3 > 888 \\implies n^2 + 3n - \\frac{1776}{\\log 3} > 0 \\).",
            "Since \\( \\log 3 \\approx 0.4771 \\), \\( \\frac{1776}{\\log 3} \\approx 3722.3 \\). The inequality is roughly \\( n^2 + 3n - 3722.3 > 0 \\).",
            "Testing values: If \\( n = 59 \\), \\( 59(62) = 3658 < 3722.3 \\). If \\( n = 60 \\), \\( 60(63) = 3780 > 3722.3 \\).",
            "<strong>Therefore, the least value of \\( n \\) is 60.</strong>"
        ]
    },

    // ---------------------------------------------------------
    // 9. 2022DSE Math I Q17
    // ---------------------------------------------------------
    {
        id: "2022-p1-q17",
        year: "2022",
        paper: "Paper 1",
        qNum: "Q17",
        marks: 7,
        type: "long",
        questionText: `
            <p>Let \\( c \\) be a real constant. The roots of the equation \\( x^2 + cx - 9 = 0 \\) are \\( \\alpha \\) and \\( \\beta \\).</p>
            <ol class="list-[lower-alpha] pl-5 mt-2 space-y-2">
                <li>Express \\( \\alpha^2 + \\beta^2 \\) in terms of \\( c \\). <span class="float-right text-gray-500">(3 marks)</span></li>
                <li>The 1st term, the 2nd term and the 3rd term of an arithmetic sequence are \\( c^2 \\), \\( \\alpha^2 + \\beta^2 \\) and 85 respectively. Find the least value of \\( n \\) such that the sum of the first \\( n \\) terms of the sequence is greater than \\( 2 \\times 10^6 \\). <span class="float-right text-gray-500">(4 marks)</span></li>
            </ol>
        `,
        steps: [
            "<span class='font-bold text-blue-700'>(a)</span> From the properties of roots (sum and product of roots), we have \\( \\alpha + \\beta = -c \\) and \\( \\alpha\\beta = -9 \\).",
            "We know the identity \\( \\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta \\).",
            "Substitute the values: \\( \\alpha^2 + \\beta^2 = (-c)^2 - 2(-9) = c^2 + 18 \\).",
            "<strong>So, \\( \\alpha^2 + \\beta^2 = c^2 + 18 \\).</strong>",
            "<span class='font-bold text-blue-700'>(b)</span> The arithmetic sequence is \\( c^2 \\), \\( c^2 + 18 \\), \\( 85 \\).",
            "The common difference is \\( d = (c^2 + 18) - c^2 = 18 \\).",
            "The 3rd term is \\( T(3) = a + 2d = c^2 + 2(18) = c^2 + 36 \\).",
            "Given \\( T(3) = 85 \\), we have \\( c^2 + 36 = 85 \\implies c^2 = 49 \\). So the first term \\( a = 49 \\).",
            "The sum of the first \\( n \\) terms is \\( S(n) = \\frac{n}{2}[2(49) + (n-1)(18)] = \\frac{n}{2}[98 + 18n - 18] = n(9n + 40) = 9n^2 + 40n \\).",
            "We need \\( 9n^2 + 40n > 2 \\times 10^6 \\implies 9n^2 + 40n - 2,000,000 > 0 \\).",
            "Using the quadratic formula: \\( n = \\frac{-40 \\pm \\sqrt{1600 - 4(9)(-2,000,000)}}{18} \\approx 469.18 \\).",
            "<strong>Therefore, the least value of \\( n \\) is 470.</strong>"
        ]
    },

    // ---------------------------------------------------------
    // 10. 2023DSE Math I Q18
    // ---------------------------------------------------------
    {
        id: "2023-p1-q18",
        year: "2023",
        paper: "Paper 1",
        qNum: "Q18",
        marks: 8,
        type: "long",
        questionText: `
            <p>Suppose that \\( \\alpha, 7, \\beta \\) is a geometric sequence, where \\( 1 < \\alpha < \\beta \\).</p>
            <ol class="list-[lower-alpha] pl-5 mt-2 space-y-2">
                <li>Express \\( \\log_7 \\alpha \\) in terms of \\( \\log_7 \\beta \\). <span class="float-right text-gray-500">(3 marks)</span></li>
                <li>If \\( \\log_\\beta \\alpha, \\log_7 \\beta, \\log_\\alpha \\beta \\) is an arithmetic sequence, find the common difference of the arithmetic sequence. <span class="float-right text-gray-500">(5 marks)</span></li>
            </ol>
        `,
        steps: [
            "<span class='font-bold text-blue-700'>(a)</span> Since \\( \\alpha, 7, \\beta \\) is a geometric sequence, \\( \\frac{7}{\\alpha} = \\frac{\\beta}{7} \\implies \\alpha\\beta = 49 \\).",
            "Take \\( \\log_7 \\) on both sides: \\( \\log_7(\\alpha\\beta) = \\log_7(49) = 2 \\).",
            "Using log properties: \\( \\log_7 \\alpha + \\log_7 \\beta = 2 \\).",
            "<strong>Therefore, \\( \\log_7 \\alpha = 2 - \\log_7 \\beta \\).</strong>",
            "<span class='font-bold text-blue-700'>(b)</span> Let \\( x = \\log_7 \\beta \\). Then \\( \\log_7 \\alpha = 2 - x \\).",
            "Using change of base, \\( \\log_\\beta \\alpha = \\frac{\\log_7 \\alpha}{\\log_7 \\beta} = \\frac{2-x}{x} \\) and \\( \\log_\\alpha \\beta = \\frac{\\log_7 \\beta}{\\log_7 \\alpha} = \\frac{x}{2-x} \\).",
            "The arithmetic sequence is \\( \\frac{2-x}{x}, x, \\frac{x}{2-x} \\).",
            "This implies \\( 2x = \\frac{2-x}{x} + \\frac{x}{2-x} \\).",
            "Simplify the right side: \\( \\frac{(2-x)^2 + x^2}{x(2-x)} = \\frac{4 - 4x + 2x^2}{2x - x^2} \\).",
            "Cross-multiply: \\( 2x(2x - x^2) = 4 - 4x + 2x^2 \\implies 4x^2 - 2x^3 = 4 - 4x + 2x^2 \\).",
            "Rearrange to form a cubic equation: \\( 2x^3 - 2x^2 - 4x + 4 = 0 \\implies x^3 - x^2 - 2x + 2 = 0 \\).",
            "Factorize by grouping: \\( x^2(x - 1) - 2(x - 1) = 0 \\implies (x^2 - 2)(x - 1) = 0 \\).",
            "So \\( x = 1 \\) or \\( x = \\sqrt{2} \\) or \\( x = -\\sqrt{2} \\). Since \\( 1 < \\alpha < \\beta \\), \\( \\log_7 \\beta > \\log_7 \\alpha \\implies x > 2-x \\implies x > 1 \\). Thus, \\( x = \\sqrt{2} \\).",
            "The common difference is \\( d = x - \\frac{2-x}{x} = \\sqrt{2} - \\frac{2-\\sqrt{2}}{\\sqrt{2}} = \\sqrt{2} - (\\sqrt{2} - 1) = 1 \\).",
            "<strong>The common difference is 1.</strong>"
        ]
    },

    // ---------------------------------------------------------
    // 11. 2025DSE Math I Q17
    // ---------------------------------------------------------
    {
        id: "2025-p1-q17",
        year: "2025",
        paper: "Paper 1",
        qNum: "Q17",
        marks: 6,
        type: "long",
        questionText: `
            <p>Let \\( T(n) \\) be the \\( n \\)-th term of an arithmetic sequence such that \\( T(1) \\neq T(2) \\) and \\( T(47) = 456 \\). It is given that \\( T(9), T(47), T(199) \\) is a geometric sequence.</p>
            <ol class="list-[lower-alpha] pl-5 mt-2 space-y-2">
                <li>Find \\( T(1) \\). <span class="float-right text-gray-500">(3 marks)</span></li>
                <li>Find the least value of \\( n \\) such that the sum of the first \\( n \\) terms of the arithmetic sequence is greater than \\( 10^6 \\). <span class="float-right text-gray-500">(3 marks)</span></li>
            </ol>
        `,
        steps: [
            "<span class='font-bold text-blue-700'>(a)</span> Let \\( a \\) be \\( T(1) \\) and \\( d \\) be the common difference. Since \\( T(1) \\neq T(2) \\), \\( d \\neq 0 \\).",
            "We have \\( T(9) = a + 8d \\), \\( T(47) = a + 46d \\), and \\( T(199) = a + 198d \\).",
            "Since they form a geometric sequence: \\( (a + 46d)^2 = (a + 8d)(a + 198d) \\).",
            "Expand both sides: \\( a^2 + 92ad + 2116d^2 = a^2 + 206ad + 1584d^2 \\).",
            "Rearrange: \\( 532d^2 - 114ad = 0 \\implies d(532d - 114a) = 0 \\).",
            "Since \\( d \\neq 0 \\), \\( 114a = 532d \\implies a = \\frac{532}{114}d = \\frac{14}{3}d \\).",
            "We are given \\( T(47) = 456 \\implies a + 46d = 456 \\). Substitute \\( a \\): \\( \\frac{14}{3}d + 46d = 456 \\implies \\frac{152}{3}d = 456 \\implies d = 9 \\).",
            "Then \\( a = \\frac{14}{3}(9) = 42 \\).",
            "<strong>Therefore, \\( T(1) = 42 \\).</strong>",
            "<span class='font-bold text-blue-700'>(b)</span> The sum of the first \\( n \\) terms is \\( S(n) = \\frac{n}{2}[2(42) + (n-1)(9)] = \\frac{n}{2}[84 + 9n - 9] = \\frac{n(9n + 75)}{2} \\).",
            "We need \\( \\frac{9n^2 + 75n}{2} > 10^6 \\implies 9n^2 + 75n - 2,000,000 > 0 \\).",
            "Using the quadratic formula: \\( n = \\frac{-75 \\pm \\sqrt{5625 - 4(9)(-2,000,000)}}{18} \\approx 467.2 \\).",
            "<strong>Therefore, the least value of \\( n \\) is 468.</strong>"
        ]
    },

    // ---------------------------------------------------------
    // 12. 2025DSE Math II Q13
    // ---------------------------------------------------------
    {
        id: "2025-p2-q13",
        year: "2025",
        paper: "Paper 2",
        qNum: "Q13",
        marks: 1,
        type: "mc",
        questionText: `
            <p>Let \\( a_n \\) be the \\( n \\)-th term of a sequence. If \\( a_2 = 3 \\), \\( a_5 = 41 \\) and \\( a_{n+2} = 2a_{n+1} + a_n \\) for any positive integer \\( n \\), then \\( a_6 = \\)</p>
            <ul class="list-none mt-4 space-y-2">
                <li class="p-2 border rounded hover:bg-gray-50">A. 99.</li>
                <li class="p-2 border rounded hover:bg-gray-50">B. 101.</li>
                <li class="p-2 border rounded hover:bg-gray-50">C. 239.</li>
                <li class="p-2 border rounded hover:bg-gray-50">D. 243.</li>
            </ul>
        `,
        steps: [
            "We are given the recurrence relation \\( a_{n+2} = 2a_{n+1} + a_n \\).",
            "Let's express the terms up to \\( a_5 \\) in terms of \\( a_1 \\) and \\( a_2 \\). We know \\( a_2 = 3 \\).",
            "\\( a_3 = 2a_2 + a_1 = 2(3) + a_1 = 6 + a_1 \\).",
            "\\( a_4 = 2a_3 + a_2 = 2(6 + a_1) + 3 = 15 + 2a_1 \\).",
            "\\( a_5 = 2a_4 + a_3 = 2(15 + 2a_1) + (6 + a_1) = 36 + 5a_1 \\).",
            "We are given \\( a_5 = 41 \\). So, \\( 36 + 5a_1 = 41 \\implies 5a_1 = 5 \\implies a_1 = 1 \\).",
            "Now we need \\( a_6 = 2a_5 + a_4 \\). We know \\( a_5 = 41 \\), and we can calculate \\( a_4 = 15 + 2(1) = 17 \\).",
            "\\( a_6 = 2(41) + 17 = 82 + 17 = 99 \\).",
            "<strong>The correct answer is A.</strong>"
        ]
    },

    // ---------------------------------------------------------
    // 13. 2025DSE Math II Q37
    // ---------------------------------------------------------
    {
        id: "2025-p2-q37",
        year: "2025",
        paper: "Paper 2",
        qNum: "Q37",
        marks: 1,
        type: "mc",
        questionText: `
            <p>Let \\( p \\), \\( q \\) and \\( r \\) be non-zero real numbers. If \\( p, q, r \\) is an arithmetic sequence, which of the following must be true?</p>
            <ol class="list-[upper-roman] pl-5 mt-2 space-y-1">
                <li>\\( 3^p, 3^q, 3^r \\) is a geometric sequence.</li>
                <li>\\( \\frac{5}{p}, \\frac{5}{q}, \\frac{5}{r} \\) is a geometric sequence.</li>
                <li>\\( p-q, q-r, r-p \\) is an arithmetic sequence.</li>
            </ol>
            <ul class="list-none mt-4 space-y-2">
                <li class="p-2 border rounded hover:bg-gray-50">A. I only</li>
                <li class="p-2 border rounded hover:bg-gray-50">B. II only</li>
                <li class="p-2 border rounded hover:bg-gray-50">C. I and III only</li>
                <li class="p-2 border rounded hover:bg-gray-50">D. II and III only</li>
            </ul>
        `,
        steps: [
            "Since \\( p, q, r \\) is an arithmetic sequence, we have \\( q - p = r - q = d \\) (the common difference).",
            "<strong>Check I:</strong> The ratio of consecutive terms is \\( \\frac{3^q}{3^p} = 3^{q-p} = 3^d \\), and \\( \\frac{3^r}{3^q} = 3^{r-q} = 3^d \\). Since the ratio is constant, it IS a geometric sequence. (I is true).",
            "<strong>Check II:</strong> The ratio is \\( \\frac{5/q}{5/p} = \\frac{p}{q} \\), and \\( \\frac{5/r}{5/q} = \\frac{q}{r} \\). Unless \\( p=q=r \\), \\( \\frac{p}{q} \\neq \\frac{q}{r} \\). (II is false).",
            "<strong>Check III:</strong> The terms are \\( p-q = -d \\), \\( q-r = -d \\), and \\( r-p = 2d \\). The differences between consecutive terms are \\( (-d) - (-d) = 0 \\) and \\( 2d - (-d) = 3d \\). Since \\( 0 \\neq 3d \\) (unless \\( d=0 \\)), it is NOT an arithmetic sequence. (III is false).",
            "<strong>The correct answer is A (I only).</strong>"
        ]
    },

    // ---------------------------------------------------------
    // 14. 2023DSE Math II Q14
    // ---------------------------------------------------------
    {
        id: "2023-p2-q14",
        year: "2023",
        paper: "Paper 2",
        qNum: "Q14",
        marks: 1,
        type: "mc",
        questionText: `
            <p>Let \\( a_n \\) be the \\( n \\)-th term of a sequence. If \\( a_6 = 23 \\), \\( a_8 = 60 \\) and \\( a_{n+2} = a_{n+1} + a_n \\) for any positive integer \\( n \\), then \\( a_3 = \\)</p>
            <ul class="list-none mt-4 space-y-2">
                <li class="p-2 border rounded hover:bg-gray-50">A. 4.</li>
                <li class="p-2 border rounded hover:bg-gray-50">B. 5.</li>
                <li class="p-2 border rounded hover:bg-gray-50">C. 9.</li>
                <li class="p-2 border rounded hover:bg-gray-50">D. 14.</li>
            </ul>
        `,
        steps: [
            "We are given \\( a_{n+2} = a_{n+1} + a_n \\) (a Fibonacci-like sequence).",
            "We can work backwards from \\( a_8 \\) and \\( a_6 \\).",
            "\\( a_8 = a_7 + a_6 \\implies 60 = a_7 + 23 \\implies a_7 = 37 \\).",
            "\\( a_7 = a_6 + a_5 \\implies 37 = 23 + a_5 \\implies a_5 = 14 \\).",
            "\\( a_6 = a_5 + a_4 \\implies 23 = 14 + a_4 \\implies a_4 = 9 \\).",
            "\\( a_5 = a_4 + a_3 \\implies 14 = 9 + a_3 \\implies a_3 = 5 \\).",
            "<strong>The correct answer is B.</strong>"
        ]
    },

    // ---------------------------------------------------------
    // 15. 2023DSE Math II Q36
    // ---------------------------------------------------------
    {
        id: "2023-p2-q36",
        year: "2023",
        paper: "Paper 2",
        qNum: "Q36",
        marks: 1,
        type: "mc",
        questionText: `
            <p>Let \\( T(n) \\) be the \\( n \\)-th term of an arithmetic sequence. If \\( T(11) = 83 \\) and \\( T(25) + T(30) = 463 \\), find the least value of \\( k \\) such that \\( T(1) + T(2) + T(3) + \\dots + T(k) > 4 \\times 10^5 \\).</p>
            <ul class="list-none mt-4 space-y-2">
                <li class="p-2 border rounded hover:bg-gray-50">A. 299</li>
                <li class="p-2 border rounded hover:bg-gray-50">B. 300</li>
                <li class="p-2 border rounded hover:bg-gray-50">C. 944</li>
                <li class="p-2 border rounded hover:bg-gray-50">D. 945</li>
            </ul>
        `,
        steps: [
            "Let \\( a \\) be the first term and \\( d \\) be the common difference.",
            "\\( T(11) = a + 10d = 83 \\).",
            "\\( T(25) + T(30) = (a + 24d) + (a + 29d) = 2a + 53d = 463 \\).",
            "From the first equation, \\( 2a + 20d = 166 \\).",
            "Subtract this from the second equation: \\( (2a + 53d) - (2a + 20d) = 463 - 166 \\implies 33d = 297 \\implies d = 9 \\).",
            "Substitute \\( d \\) back: \\( a + 10(9) = 83 \\implies a = -7 \\).",
            "The sum is \\( S(k) = \\frac{k}{2}[2(-7) + (k-1)(9)] = \\frac{k}{2}[9k - 23] \\).",
            "We need \\( \\frac{9k^2 - 23k}{2} > 400,000 \\implies 9k^2 - 23k - 800,000 > 0 \\).",
            "Using the quadratic formula: \\( k = \\frac{23 \\pm \\sqrt{(-23)^2 - 4(9)(-800,000)}}{18} \\approx 299.4 \\).",
            "Since \\( k \\) must be an integer, the least value is 300.",
            "<strong>The correct answer is B.</strong>"
        ]
    },

    // ---------------------------------------------------------
    // 16. 2022DSE Math II Q14
    // ---------------------------------------------------------
    {
        id: "2022-p2-q14",
        year: "2022",
        paper: "Paper 2",
        qNum: "Q14",
        marks: 1,
        type: "mc",
        questionText: `
            <p>In the figure, the 1st pattern consists of 8 dots. For any positive integer \\( n \\), the \\( (n+1) \\)-th pattern is formed by adding \\( (2n+6) \\) dots to the \\( n \\)-th pattern. Find the number of dots in the 7th pattern.</p>
            <div class="flex items-center justify-center space-x-4 my-4 p-4 bg-gray-100 rounded-lg text-gray-700 font-semibold">
                <span>Pattern 1 (8 dots)</span>
                <span>&rarr;</span>
                <span>Pattern 2</span>
                <span>&rarr;</span>
                <span>Pattern 3</span>
                <span>&rarr;</span>
                <span>...</span>
            </div>
            <ul class="list-none mt-4 space-y-2">
                <li class="p-2 border rounded hover:bg-gray-50">A. 52</li>
                <li class="p-2 border rounded hover:bg-gray-50">B. 68</li>
                <li class="p-2 border rounded hover:bg-gray-50">C. 86</li>
                <li class="p-2 border rounded hover:bg-gray-50">D. 106</li>
            </ul>
        `,
        steps: [
            "We are given the recurrence relation: \\( T(n+1) = T(n) + 2n + 6 \\), with \\( T(1) = 8 \\).",
            "Let's calculate the terms sequentially up to \\( T(7) \\).",
            "\\( T(2) = T(1) + 2(1) + 6 = 8 + 8 = 16 \\).",
            "\\( T(3) = T(2) + 2(2) + 6 = 16 + 10 = 26 \\).",
            "\\( T(4) = T(3) + 2(3) + 6 = 26 + 12 = 38 \\).",
            "\\( T(5) = T(4) + 2(4) + 6 = 38 + 14 = 52 \\).",
            "\\( T(6) = T(5) + 2(5) + 6 = 52 + 16 = 68 \\).",
            "\\( T(7) = T(6) + 2(6) + 6 = 68 + 18 = 86 \\).",
            "<strong>The correct answer is C.</strong>"
        ]
    },

    // ---------------------------------------------------------
    // 17. 2022DSE Math II Q37
    // ---------------------------------------------------------
    {
        id: "2022-p2-q37",
        year: "2022",
        paper: "Paper 2",
        qNum: "Q37",
        marks: 1,
        type: "mc",
        questionText: `
            <p>Let \\( a_n \\) be the \\( n \\)-th term of a geometric sequence. It is given that \\( a_1 = 8p^2 \\), \\( a_2 = 1 \\) and \\( a_3 = 27p \\), where \\( p \\) is a real number. Find \\( a_4 \\).</p>
            <ul class="list-none mt-4 space-y-2">
                <li class="p-2 border rounded hover:bg-gray-50">A. \\( \\frac{1}{6} \\)</li>
                <li class="p-2 border rounded hover:bg-gray-50">B. \\( \\frac{2}{9} \\)</li>
                <li class="p-2 border rounded hover:bg-gray-50">C. \\( \\frac{9}{2} \\)</li>
                <li class="p-2 border rounded hover:bg-gray-50">D. \\( \\frac{81}{4} \\)</li>
            </ul>
        `,
        steps: [
            "For a geometric sequence, the ratio between consecutive terms is constant: \\( \\frac{a_2}{a_1} = \\frac{a_3}{a_2} \\).",
            "Substitute the given values: \\( \\frac{1}{8p^2} = \\frac{27p}{1} \\).",
            "Cross-multiply: \\( 1 = 216p^3 \\implies p^3 = \\frac{1}{216} \\implies p = \\frac{1}{6} \\).",
            "Now substitute \\( p \\) to find the common ratio \\( r \\). \\( a_3 = 27(\\frac{1}{6}) = \\frac{9}{2} \\).",
            "The common ratio \\( r = \\frac{a_3}{a_2} = \\frac{9/2}{1} = \\frac{9}{2} \\).",
            "The 4th term is \\( a_4 = a_3 \\times r = \\frac{9}{2} \\times \\frac{9}{2} = \\frac{81}{4} \\).",
            "<strong>The correct answer is D.</strong>"
        ]
    },

    // ---------------------------------------------------------
    // 18. 2024DSE Math II Q36
    // ---------------------------------------------------------
    {
        id: "2024-p2-q36",
        year: "2024",
        paper: "Paper 2",
        qNum: "Q36",
        marks: 1,
        type: "mc",
        questionText: `
            <p>The sum of the first \\( n \\) terms of a sequence is \\( n(2n+3) \\). Which of the following are true?</p>
            <ol class="list-[upper-roman] pl-5 mt-2 space-y-1">
                <li>14 is a term of the sequence.</li>
                <li>The \\( n \\)-th term of the sequence is \\( 4n+1 \\).</li>
                <li>The sequence is an arithmetic sequence.</li>
            </ol>
            <ul class="list-none mt-4 space-y-2">
                <li class="p-2 border rounded hover:bg-gray-50">A. I and II only</li>
                <li class="p-2 border rounded hover:bg-gray-50">B. I and III only</li>
                <li class="p-2 border rounded hover:bg-gray-50">C. II and III only</li>
                <li class="p-2 border rounded hover:bg-gray-50">D. I, II and III</li>
            </ul>
        `,
        steps: [
            "We are given \\( S(n) = n(2n+3) = 2n^2 + 3n \\).",
            "The \\( n \\)-th term \\( T(n) \\) is found by \\( S(n) - S(n-1) \\).",
            "\\( T(n) = (2n^2 + 3n) - [2(n-1)^2 + 3(n-1)] \\).",
            "\\( T(n) = 2n^2 + 3n - [2(n^2 - 2n + 1) + 3n - 3] = 2n^2 + 3n - [2n^2 - n - 1] = 4n + 1 \\).",
            "<strong>Check II:</strong> The \\( n \\)-th term is \\( 4n+1 \\). (II is true).",
            "<strong>Check III:</strong> Since \\( T(n) = 4n+1 \\) is a linear function of \\( n \\), the sequence is an arithmetic sequence with a common difference of 4. (III is true).",
            "<strong>Check I:</strong> If 14 is a term, then \\( 4n + 1 = 14 \\implies 4n = 13 \\implies n = 3.25 \\). Since \\( n \\) must be an integer, 14 is NOT a term. (I is false).",
            "<strong>The correct answer is C (II and III only).</strong>"
        ]
    }
];