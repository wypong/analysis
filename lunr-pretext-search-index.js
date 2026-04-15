var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-sets-of-real-numbers",
  "level": "1",
  "url": "sec-sets-of-real-numbers.html",
  "type": "Section",
  "number": "1.1",
  "title": "Sets of Real Numbers",
  "body": " Sets of Real Numbers   We use to denote the set of real numbers. For and , we define:       In particular, .  Some subsets of that we will encounter frequently are:   The set of natural numbers  The set of integers .  The set of rational numbers .     Bounded Subsets of  A real number is an upper bound upper bound bound upper (resp. a lower bound lower bound ) of a set of real numbers if (resp. ) for every . We write and for the sets of upper bounds and lower bounds of , respectively. It is straightforward to check that . In other words, is an upper bound of if and only if is a lower bound of .  A set is bounded above bounded above (resp. bounded below bounded below ) if it has an upper bound (resp. a lower bound). We say is bounded bounded if it is both bounded above and bounded below. A real-valued function is bounded (resp. bounded above, bounded below) if its range is bounded (resp. bounded above, bounded below). function bounded      The interval is bounded; for example, it is bounded above by and bounded below by .  The set is bounded below by , but it is not bounded above.   is neither bounded below nor above.  Every finite set of real numbers is bounded.  Every real number is both an upper bound and a lower bound of the empty set .     An upper bound of a set is also an upper bound of every subset of that set. Therefore, an intersection of sets that are bounded above is again bounded above. If and are upper bounds of and , respectively, then is an upper bound of . Thus, a finite union of sets bounded above is bounded above. Likewise, the family of subsets of that are bounded below (resp. bounded) is closed under arbitrary intersections and finite unions.    A set is bounded if and only if there exists such that .    One implication is immediate: if , then is bounded. For the other implication, suppose is bounded. Then so is . Hence is bounded above, say by . Then for all , so .    A supremum supremum of a set , denoted by , is the least upper bound of . In other words, if is an upper bound of and for every upper bound of . Dually, an infimum infimum of , denoted by , is the greatest lower bound of . In other words, if is a lower bound of and every lower bound of is at most . It is clear that (likewise ), if it exists, is unique.  A useful reformulation is: if and only if is an upper bound of and for every there exists with .     The set of upper bounds and the set of lower bounds of are and , respectively. Hence and .  The set of upper bounds and the set of lower bounds of are and the empty set, respectively. Hence and does not exist.   has neither a supremum nor an infimum.  The set of upper bounds and the set of lower bounds of are both . Conventionally, we write and . Note that neither nor exists in .      "
},
{
  "id": "subsec-bounded-subsets-2",
  "level": "2",
  "url": "sec-sets-of-real-numbers.html#subsec-bounded-subsets-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "upper bound lower bound "
},
{
  "id": "subsec-bounded-subsets-3",
  "level": "2",
  "url": "sec-sets-of-real-numbers.html#subsec-bounded-subsets-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bounded above bounded below bounded bounded "
},
{
  "id": "eg-bounded-subsets-examples",
  "level": "2",
  "url": "sec-sets-of-real-numbers.html#eg-bounded-subsets-examples",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "   The interval is bounded; for example, it is bounded above by and bounded below by .  The set is bounded below by , but it is not bounded above.   is neither bounded below nor above.  Every finite set of real numbers is bounded.  Every real number is both an upper bound and a lower bound of the empty set .    "
},
{
  "id": "prop-bounded-iff-abs-bound",
  "level": "2",
  "url": "sec-sets-of-real-numbers.html#prop-bounded-iff-abs-bound",
  "type": "Proposition",
  "number": "1.1.2",
  "title": "",
  "body": "  A set is bounded if and only if there exists such that .    One implication is immediate: if , then is bounded. For the other implication, suppose is bounded. Then so is . Hence is bounded above, say by . Then for all , so .   "
},
{
  "id": "subsec-bounded-subsets-7",
  "level": "2",
  "url": "sec-sets-of-real-numbers.html#subsec-bounded-subsets-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "supremum infimum "
},
{
  "id": "eg-inf-and-sup",
  "level": "2",
  "url": "sec-sets-of-real-numbers.html#eg-inf-and-sup",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "   The set of upper bounds and the set of lower bounds of are and , respectively. Hence and .  The set of upper bounds and the set of lower bounds of are and the empty set, respectively. Hence and does not exist.   has neither a supremum nor an infimum.  The set of upper bounds and the set of lower bounds of are both . Conventionally, we write and . Note that neither nor exists in .    "
},
{
  "id": "sec-completeness-axiom",
  "level": "1",
  "url": "sec-completeness-axiom.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Completeness Axiom",
  "body": " The Completeness Axiom   The following axiom is what sets the real field apart from other ordered fields.   The Completeness Axiom of   Every non-empty set of real numbers that is bounded above has a supremum in .    For an ordered set, the least upper bound property  least upper bound property means that every nonempty subset that is bounded above has a least upper bound, that is, a supremum, in the set. Thus, the completeness axiom says that , with its usual order, has the least upper bound property. Dually, this is equivalent to saying that every nonempty subset of that is bounded below has an infimum in ; see .    Consequences  An ordered field is Archimedean  Archimedean if for every in the field there exists such that .    The ordered field is Archimedean.    By the definition above, it suffices to show that for every there exists such that .  Suppose instead that some were an upper bound for . Then would be non-empty and bounded above, so by the least upper bound property, would exist. Since , the number cannot be an upper bound of . So there is with . Then , and , contradicting that is an upper bound of .  Therefore is not bounded above in , and hence is Archimedean.      For any and any , there exists such that .    Since , the number is real. By , there exists such that . Multiplying by gives .      For any , there exists such that .    Apply with . Then there exists such that . Since , dividing by yields .      For any , there exists such that .    By , there exists such that . Then .  Consider the finite set Since , the set of integers in that are at most is non-empty. Let be the largest such integer.  Then . Also , because . Hence . By maximality of , the integer cannot satisfy . Therefore , and so .      For any , if , then there exists such that .    By , there exists such that .  If , then so , contradicting the hypothesis. Therefore .  Let . Then and . In particular, .    A subset of is dense   dense  if between any two real numbers lies an element of .    The set is dense in .    Let with . Then , so by there exists such that .  Applying to the numbers and , we obtain an integer such that .  Since , dividing by gives . Because , this proves that is dense in .     Existence of Positive Square Roots   For each , there exists a unique such that .    Uniqueness is immediate because is strictly increasing on .  For existence, define . The set is non-empty: if , then ; if , then . It is bounded above by , since implies . By completeness, exists.  If , then for sufficiently small , we still have , so , contradicting that is an upper bound of . If , then for sufficiently small , ; then every satisfies , so is an upper bound of , contradicting leastness of . Hence .    A standard comparison example is the ordered field : the set is non-empty and bounded above in , but it has no supremum in . Therefore does not satisfy the least upper bound property.   "
},
{
  "id": "ax-least-upper-bound-property",
  "level": "2",
  "url": "sec-completeness-axiom.html#ax-least-upper-bound-property",
  "type": "Axiom",
  "number": "1.2.1",
  "title": "The Completeness Axiom of <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " The Completeness Axiom of   Every non-empty set of real numbers that is bounded above has a supremum in .   "
},
{
  "id": "sec-completeness-axiom-2-3",
  "level": "2",
  "url": "sec-completeness-axiom.html#sec-completeness-axiom-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "least upper bound property "
},
{
  "id": "subsec-completeness-consequences-2",
  "level": "2",
  "url": "sec-completeness-axiom.html#subsec-completeness-consequences-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Archimedean "
},
{
  "id": "prop-n-unbounded-above",
  "level": "2",
  "url": "sec-completeness-axiom.html#prop-n-unbounded-above",
  "type": "Proposition",
  "number": "1.2.2",
  "title": "",
  "body": "  The ordered field is Archimedean.    By the definition above, it suffices to show that for every there exists such that .  Suppose instead that some were an upper bound for . Then would be non-empty and bounded above, so by the least upper bound property, would exist. Since , the number cannot be an upper bound of . So there is with . Then , and , contradicting that is an upper bound of .  Therefore is not bounded above in , and hence is Archimedean.   "
},
{
  "id": "prop-archimedean-property",
  "level": "2",
  "url": "sec-completeness-axiom.html#prop-archimedean-property",
  "type": "Proposition",
  "number": "1.2.3",
  "title": "",
  "body": "  For any and any , there exists such that .    Since , the number is real. By , there exists such that . Multiplying by gives .   "
},
{
  "id": "prop-reciprocal-archimedean",
  "level": "2",
  "url": "sec-completeness-axiom.html#prop-reciprocal-archimedean",
  "type": "Proposition",
  "number": "1.2.4",
  "title": "",
  "body": "  For any , there exists such that .    Apply with . Then there exists such that . Since , dividing by yields .   "
},
{
  "id": "prop-integer-part",
  "level": "2",
  "url": "sec-completeness-axiom.html#prop-integer-part",
  "type": "Proposition",
  "number": "1.2.5",
  "title": "",
  "body": "  For any , there exists such that .    By , there exists such that . Then .  Consider the finite set Since , the set of integers in that are at most is non-empty. Let be the largest such integer.  Then . Also , because . Hence . By maximality of , the integer cannot satisfy . Therefore , and so .   "
},
{
  "id": "prop-integer-between-reals",
  "level": "2",
  "url": "sec-completeness-axiom.html#prop-integer-between-reals",
  "type": "Proposition",
  "number": "1.2.6",
  "title": "",
  "body": "  For any , if , then there exists such that .    By , there exists such that .  If , then so , contradicting the hypothesis. Therefore .  Let . Then and . In particular, .   "
},
{
  "id": "subsec-completeness-consequences-8",
  "level": "2",
  "url": "sec-completeness-axiom.html#subsec-completeness-consequences-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dense "
},
{
  "id": "prop-q-dense-in-r",
  "level": "2",
  "url": "sec-completeness-axiom.html#prop-q-dense-in-r",
  "type": "Proposition",
  "number": "1.2.7",
  "title": "",
  "body": "  The set is dense in .    Let with . Then , so by there exists such that .  Applying to the numbers and , we obtain an integer such that .  Since , dividing by gives . Because , this proves that is dense in .   "
},
{
  "id": "thm-positive-square-root-existence",
  "level": "2",
  "url": "sec-completeness-axiom.html#thm-positive-square-root-existence",
  "type": "Theorem",
  "number": "1.2.8",
  "title": "Existence of Positive Square Roots.",
  "body": " Existence of Positive Square Roots   For each , there exists a unique such that .    Uniqueness is immediate because is strictly increasing on .  For existence, define . The set is non-empty: if , then ; if , then . It is bounded above by , since implies . By completeness, exists.  If , then for sufficiently small , we still have , so , contradicting that is an upper bound of . If , then for sufficiently small , ; then every satisfies , so is an upper bound of , contradicting leastness of . Hence .   "
},
{
  "id": "ex-ch1",
  "level": "1",
  "url": "ex-ch1.html",
  "type": "Exercises",
  "number": "1.3",
  "title": "Exercises",
  "body": " Exercises    Let . Find all upper bounds of and all lower bounds of . Is bounded?      Give an example of bounded sets ( ) such that is not bounded. Give an example of two non-empty sets bounded above whose intersection is empty.      For each set, decide whether it is an interval. Justify your answer.            Suppose is a nonempty subset of a bounded set . Show that       Compute the intersection of the two intervals and , and express your answer in interval notation.      Give one example of two intervals whose union is an interval, and one example of two intervals whose union is not an interval.      Let . Define by , where and . Show that is a bijection.      Is each of the following sets finite, countably infinite, or uncountable?            Prove that the least upper bound property is equivalent to: every non-empty subset of that is bounded below has an infimum.      Prove that is not bounded above in .      Let . Show that is non-empty and bounded above in , but has no supremum in .    "
},
{
  "id": "ex-ch1-upper-lower-bounds",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-upper-lower-bounds",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": "  Let . Find all upper bounds of and all lower bounds of . Is bounded?   "
},
{
  "id": "ex-ch1-union-intersection-bounded",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-union-intersection-bounded",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "",
  "body": "  Give an example of bounded sets ( ) such that is not bounded. Give an example of two non-empty sets bounded above whose intersection is empty.   "
},
{
  "id": "ex-ch1-interval-membership",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-interval-membership",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "",
  "body": "  For each set, decide whether it is an interval. Justify your answer.         "
},
{
  "id": "ex-sec-completeness-sup-monotone",
  "level": "2",
  "url": "ex-ch1.html#ex-sec-completeness-sup-monotone",
  "type": "Exercise",
  "number": "1.3.4",
  "title": "",
  "body": "  Suppose is a nonempty subset of a bounded set . Show that    "
},
{
  "id": "ex-ch1-intersection-intervals",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-intersection-intervals",
  "type": "Exercise",
  "number": "1.3.5",
  "title": "",
  "body": "  Compute the intersection of the two intervals and , and express your answer in interval notation.   "
},
{
  "id": "ex-ch1-union-overlap-vs-disjoint",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-union-overlap-vs-disjoint",
  "type": "Exercise",
  "number": "1.3.6",
  "title": "",
  "body": "  Give one example of two intervals whose union is an interval, and one example of two intervals whose union is not an interval.   "
},
{
  "id": "ex-ch1-bijection-open-interval",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-bijection-open-interval",
  "type": "Exercise",
  "number": "1.3.7",
  "title": "",
  "body": "  Let . Define by , where and . Show that is a bijection.   "
},
{
  "id": "ex-ch1-countability-intervals",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-countability-intervals",
  "type": "Exercise",
  "number": "1.3.8",
  "title": "",
  "body": "  Is each of the following sets finite, countably infinite, or uncountable?         "
},
{
  "id": "ex-ch1-completeness-infimum-equivalent",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-completeness-infimum-equivalent",
  "type": "Exercise",
  "number": "1.3.9",
  "title": "",
  "body": "  Prove that the least upper bound property is equivalent to: every non-empty subset of that is bounded below has an infimum.   "
},
{
  "id": "ex-ch1-completeness-n-unbounded",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-completeness-n-unbounded",
  "type": "Exercise",
  "number": "1.3.10",
  "title": "",
  "body": "  Prove that is not bounded above in .   "
},
{
  "id": "ex-ch1-completeness-q-not-complete",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-completeness-q-not-complete",
  "type": "Exercise",
  "number": "1.3.11",
  "title": "",
  "body": "  Let . Show that is non-empty and bounded above in , but has no supremum in .   "
},
{
  "id": "sec-sequences",
  "level": "1",
  "url": "sec-sequences.html",
  "type": "Section",
  "number": "2.1",
  "title": "Sequences",
  "body": " Sequences   Definitions  An infinite sequence sequence is a function whose domain is the ordered set . In this chapter we only consider sequences of real numbers, so we simply call them sequences. If is a sequence, we write for its value at and call the -th term term of a sequence of . We also denote the sequence by , and we identify a real number with the constant sequence .    Since sequences are in particular real-valued functions, adjectives for real-valued functions apply to them as well:   is decreasing and bounded.  is increasing and bounded below, but not bounded above.  is bounded, but neither increasing nor decreasing.     A sequence is null null sequence if for every there exists such that In words, a sequence is null if the absolute value of its terms can be arbitrarily close to zero provided that the index of the terms is sufficiently large.  It often makes an argument more intuitive by replacing \"there exists such that for all \" with either of the following phrases:   for all sufficiently large ,  for all but finitely many .   We may abbreviate \" is sufficiently large\" by or . For example, the statement means that for every , we have for all .  We say that a sequence  converges convergent sequence to or is a limit limit of a sequence of , if the sequence is null. We denote this by The last notation captures the idea that a convergent sequence can be viewed as an approximation to its limit.  A sequence is convergent  convergent sequence if it has a limit, otherwise it is divergent divergent sequence . We also distinguish two common types of divergent behavior. We write if for every we have for all sufficiently large . Similarly, we write if for every we have for all sufficiently large .    Fundamental Results    Suppose and are null sequences. Then    is null.   is null if is bounded.     For (1), let . Choose so that for all and for all . Then for , the triangle inequality gives .  For (2), by there exists such that for every . Let , then for all , and hence . This shows that is a null sequence because is an arbitrary positive number as and is arbitrary.    The proof of (1) illustrates an important general point: if a statement holds for all sufficiently large and a statement also holds for all sufficiently large , then the conjunction \" and \" holds for all sufficiently large .    A convergent sequence has a unique limit.    Suppose and . Then both and are null sequences. By , their sum is also null. A constant sequence is null only if its constant value is zero, so . Therefore .      Every convergent sequence is bounded.    Suppose . Then there exists such that for all . Hence for all . It follows that for every . Thus is bounded.    The proof above shows that \"eventually bounded\" and \"bounded\" are the same for sequences.   Monotone Convergence Theorem   Every bounded monotone sequence converges.    First suppose is increasing and bounded. Then its set of terms is nonempty and bounded above, so exists.  Let . Since is not an upper bound of , there exists such that . As is increasing, for every we have Hence for all , so .  If is decreasing and bounded, then is increasing and bounded. By the increasing case, converges, and then implies that converges as well.    The next proposition shows that the usual algebraic operations on convergent sequences again produce convergent sequences, and that taking limits commutes with these operations.    Suppose and . Then:   ,  ,  , provided .     Both and are null, so shows that their sum is null. Therefore .  Also . By , the sequence is bounded. Hence implies that is null. Since the constant sequence is bounded, the same proposition shows that is null. Therefore is null, and so .  For the reciprocal, assume . Since , there exists such that for all . For such , , so in particular . Moreover, for all , Since is null and is a fixed number, implies that is null. Thus .     Squeeze Lemma   Suppose for every , and suppose and . Then .    Let . Since and , we have and for all sufficiently large . For such , Hence for all sufficiently large , so .      If and for every , then .    Suppose instead that . Then for all , , so . This contradicts . Therefore .      If , , and for every , then .    The sequence converges to by , and each term is nonnegative. Hence by , so .    A subsequence subsequence of a sequence is a sequence of the form , where is a strictly increasing sequence of natural numbers. In other words, a subsequence of is a sequence of the form , where is a strictly increasing function from to itself.    Every subsequence of a convergent sequence converges to the same limit.    Suppose and is a subsequence. Since is strictly increasing, we have for every .  Let . Choose such that for all . If , then , so . Hence .     "
},
{
  "id": "subsec-sequences-definitions-2",
  "level": "2",
  "url": "sec-sequences.html#subsec-sequences-definitions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "infinite sequence -th term "
},
{
  "id": "eg-basic-sequences",
  "level": "2",
  "url": "sec-sequences.html#eg-basic-sequences",
  "type": "Example",
  "number": "2.1.1",
  "title": "",
  "body": "  Since sequences are in particular real-valued functions, adjectives for real-valued functions apply to them as well:   is decreasing and bounded.  is increasing and bounded below, but not bounded above.  is bounded, but neither increasing nor decreasing.    "
},
{
  "id": "subsec-sequences-definitions-4",
  "level": "2",
  "url": "sec-sequences.html#subsec-sequences-definitions-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "null "
},
{
  "id": "subsec-sequences-definitions-8",
  "level": "2",
  "url": "sec-sequences.html#subsec-sequences-definitions-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converges limit "
},
{
  "id": "subsec-sequences-definitions-9",
  "level": "2",
  "url": "sec-sequences.html#subsec-sequences-definitions-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convergent divergent "
},
{
  "id": "prop-null-sequence-basic-operations",
  "level": "2",
  "url": "sec-sequences.html#prop-null-sequence-basic-operations",
  "type": "Proposition",
  "number": "2.1.2",
  "title": "",
  "body": "  Suppose and are null sequences. Then    is null.   is null if is bounded.     For (1), let . Choose so that for all and for all . Then for , the triangle inequality gives .  For (2), by there exists such that for every . Let , then for all , and hence . This shows that is a null sequence because is an arbitrary positive number as and is arbitrary.   "
},
{
  "id": "prop-convergent-sequence-unique-limit",
  "level": "2",
  "url": "sec-sequences.html#prop-convergent-sequence-unique-limit",
  "type": "Proposition",
  "number": "2.1.3",
  "title": "",
  "body": "  A convergent sequence has a unique limit.    Suppose and . Then both and are null sequences. By , their sum is also null. A constant sequence is null only if its constant value is zero, so . Therefore .   "
},
{
  "id": "prop-convergent-sequence-bounded",
  "level": "2",
  "url": "sec-sequences.html#prop-convergent-sequence-bounded",
  "type": "Proposition",
  "number": "2.1.4",
  "title": "",
  "body": "  Every convergent sequence is bounded.    Suppose . Then there exists such that for all . Hence for all . It follows that for every . Thus is bounded.   "
},
{
  "id": "thm-monotone-convergence",
  "level": "2",
  "url": "sec-sequences.html#thm-monotone-convergence",
  "type": "Theorem",
  "number": "2.1.5",
  "title": "Monotone Convergence Theorem.",
  "body": " Monotone Convergence Theorem   Every bounded monotone sequence converges.    First suppose is increasing and bounded. Then its set of terms is nonempty and bounded above, so exists.  Let . Since is not an upper bound of , there exists such that . As is increasing, for every we have Hence for all , so .  If is decreasing and bounded, then is increasing and bounded. By the increasing case, converges, and then implies that converges as well.   "
},
{
  "id": "prop-limit-laws-sequences",
  "level": "2",
  "url": "sec-sequences.html#prop-limit-laws-sequences",
  "type": "Proposition",
  "number": "2.1.6",
  "title": "",
  "body": "  Suppose and . Then:   ,  ,  , provided .     Both and are null, so shows that their sum is null. Therefore .  Also . By , the sequence is bounded. Hence implies that is null. Since the constant sequence is bounded, the same proposition shows that is null. Therefore is null, and so .  For the reciprocal, assume . Since , there exists such that for all . For such , , so in particular . Moreover, for all , Since is null and is a fixed number, implies that is null. Thus .   "
},
{
  "id": "prop-squeeze-lemma",
  "level": "2",
  "url": "sec-sequences.html#prop-squeeze-lemma",
  "type": "Proposition",
  "number": "2.1.7",
  "title": "Squeeze Lemma.",
  "body": " Squeeze Lemma   Suppose for every , and suppose and . Then .    Let . Since and , we have and for all sufficiently large . For such , Hence for all sufficiently large , so .   "
},
{
  "id": "prop-limit-preserves-nonnegativity",
  "level": "2",
  "url": "sec-sequences.html#prop-limit-preserves-nonnegativity",
  "type": "Proposition",
  "number": "2.1.8",
  "title": "",
  "body": "  If and for every , then .    Suppose instead that . Then for all , , so . This contradicts . Therefore .   "
},
{
  "id": "cor-limit-preserves-order",
  "level": "2",
  "url": "sec-sequences.html#cor-limit-preserves-order",
  "type": "Corollary",
  "number": "2.1.9",
  "title": "",
  "body": "  If , , and for every , then .    The sequence converges to by , and each term is nonnegative. Hence by , so .   "
},
{
  "id": "subsec-sequences-fundamental-results-13",
  "level": "2",
  "url": "sec-sequences.html#subsec-sequences-fundamental-results-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subsequence "
},
{
  "id": "prop-subsequence-of-convergent-sequence",
  "level": "2",
  "url": "sec-sequences.html#prop-subsequence-of-convergent-sequence",
  "type": "Proposition",
  "number": "2.1.10",
  "title": "",
  "body": "  Every subsequence of a convergent sequence converges to the same limit.    Suppose and is a subsequence. Since is strictly increasing, we have for every .  Let . Choose such that for all . If , then , so . Hence .   "
},
{
  "id": "sec-convergence-tests-for-sequences",
  "level": "1",
  "url": "sec-convergence-tests-for-sequences.html",
  "type": "Section",
  "number": "2.2",
  "title": "Convergence Tests for Sequences",
  "body": " Convergence Tests for Sequences   In this section we study geometric sequences, sequences of the form , and the ratio test. These results will be useful for deciding convergence of other sequences.    Geometric Sequences  We begin with sequences of the form for . The cases and are constant sequences, so the interesting cases are and .    The sequence is null if , and diverges to if .    First suppose . Then Hence is decreasing and bounded below, so implies that it converges to some real number . By , the subsequence also converges to . Since the constant sequence converges to , gives . By , we must have . Because , this implies .  Now suppose . Then , so the first case gives . For any , since , we have for all sufficiently large . Equivalently, for all sufficiently large . Thus .      If , then , so by . Since , gives . For example, converges to .  In contrast, does not converge, because its odd terms are and its even terms are .      -th Root    For every , the sequence converges to .    First suppose . Then Thus is decreasing and bounded below, so it converges by . Let be its limit.  Every term satisfies , so by applied to the sequence . The subsequence also converges to by . Since , gives . By uniqueness of limits, . Since , it follows that .  Now suppose . Then , so the first part shows . Since , the reciprocal limit law gives .      Ratio Test  The next test gives a convenient condition for comparing a sequence with a geometric sequence.   Ratio Test   Let be a sequence of nonzero real numbers, and suppose the limit exists. If , then is null. If , then is unbounded.    First suppose . Since the terms are nonnegative, we also have by . We have , so for all but finitely many . Since the convergence behavior and limit of a sequence do not change when finitely many terms are modified, we may assume that for all . Thus, for any , By , the sequence is null, and then shows that is also null.  Now suppose . Then and for all but finitely many . Again, we may assume that the inequality, or equivalently , holds for all . Therefore, Because , shows that . Thus, is unbounded.      If , the ratio test gives no conclusion. For example, satisfies and is null, while the constant sequence satisfies and is not null.    For positive sequences and , we write if is null.   Growth Comparison   Let and . Then     First, Therefore by .  Next, Hence by .  Finally, Since , gives .      The sequence converges to . To see this, let and set . The growth comparison proposition with shows that . Hence for all sufficiently large . Taking -th roots, we obtain for all sufficiently large .    Thus for all sufficiently large . Therefore .     "
},
{
  "id": "prop-geometric-sequence-test",
  "level": "2",
  "url": "sec-convergence-tests-for-sequences.html#prop-geometric-sequence-test",
  "type": "Proposition",
  "number": "2.2.1",
  "title": "",
  "body": "  The sequence is null if , and diverges to if .    First suppose . Then Hence is decreasing and bounded below, so implies that it converges to some real number . By , the subsequence also converges to . Since the constant sequence converges to , gives . By , we must have . Because , this implies .  Now suppose . Then , so the first case gives . For any , since , we have for all sufficiently large . Equivalently, for all sufficiently large . Thus .   "
},
{
  "id": "eg-geometric-sequence-negative-base",
  "level": "2",
  "url": "sec-convergence-tests-for-sequences.html#eg-geometric-sequence-negative-base",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": "  If , then , so by . Since , gives . For example, converges to .  In contrast, does not converge, because its odd terms are and its even terms are .   "
},
{
  "id": "prop-nth-root-sequence-test",
  "level": "2",
  "url": "sec-convergence-tests-for-sequences.html#prop-nth-root-sequence-test",
  "type": "Proposition",
  "number": "2.2.3",
  "title": "",
  "body": "  For every , the sequence converges to .    First suppose . Then Thus is decreasing and bounded below, so it converges by . Let be its limit.  Every term satisfies , so by applied to the sequence . The subsequence also converges to by . Since , gives . By uniqueness of limits, . Since , it follows that .  Now suppose . Then , so the first part shows . Since , the reciprocal limit law gives .   "
},
{
  "id": "prop-ratio-test-sequences",
  "level": "2",
  "url": "sec-convergence-tests-for-sequences.html#prop-ratio-test-sequences",
  "type": "Proposition",
  "number": "2.2.4",
  "title": "Ratio Test.",
  "body": " Ratio Test   Let be a sequence of nonzero real numbers, and suppose the limit exists. If , then is null. If , then is unbounded.    First suppose . Since the terms are nonnegative, we also have by . We have , so for all but finitely many . Since the convergence behavior and limit of a sequence do not change when finitely many terms are modified, we may assume that for all . Thus, for any , By , the sequence is null, and then shows that is also null.  Now suppose . Then and for all but finitely many . Again, we may assume that the inequality, or equivalently , holds for all . Therefore, Because , shows that . Thus, is unbounded.   "
},
{
  "id": "eg-ratio-test-inconclusive",
  "level": "2",
  "url": "sec-convergence-tests-for-sequences.html#eg-ratio-test-inconclusive",
  "type": "Example",
  "number": "2.2.5",
  "title": "",
  "body": "  If , the ratio test gives no conclusion. For example, satisfies and is null, while the constant sequence satisfies and is not null.   "
},
{
  "id": "prop-growth-comparison-basic-sequences",
  "level": "2",
  "url": "sec-convergence-tests-for-sequences.html#prop-growth-comparison-basic-sequences",
  "type": "Proposition",
  "number": "2.2.6",
  "title": "Growth Comparison.",
  "body": " Growth Comparison   Let and . Then     First, Therefore by .  Next, Hence by .  Finally, Since , gives .   "
},
{
  "id": "eg-nth-root-of-n",
  "level": "2",
  "url": "sec-convergence-tests-for-sequences.html#eg-nth-root-of-n",
  "type": "Example",
  "number": "2.2.7",
  "title": "",
  "body": "  The sequence converges to . To see this, let and set . The growth comparison proposition with shows that . Hence for all sufficiently large . Taking -th roots, we obtain for all sufficiently large .    Thus for all sufficiently large . Therefore .   "
},
{
  "id": "sec-bolzano-weierstrass",
  "level": "1",
  "url": "sec-bolzano-weierstrass.html",
  "type": "Section",
  "number": "2.3",
  "title": "Bolzano-Weierstrass Theorem",
  "body": " Bolzano-Weierstrass Theorem  Consider a sequence . For each , let be the set of all terms of with index at least . Clearly , and so as extended real numbers. Since any two of the sets differ by only finitely many terms, either all of them are bounded or none of them is. In the bounded case, the real sequence is decreasing and bounded below by . By the Monotone Convergence Theorem, this sequence has a limit. That limit is called the limit superior sequence limit superior of and is denoted by . Likewise, the limit inferior sequence limit inferior of is defined to be the limit of the real sequence .  If the sets are not bounded above, then each , and we define . Likewise, if the sets are not bounded below, then each , and we define .    A bounded sequence is convergent if and only if .    Suppose first that . Let . Choose such that for all , Then for any , and so Therefore, is arbitrary closed to and hence must be . Likewise, as well.  Conversely, suppose . Since , we have for every . By the squeeze lemma, . Therefore is convergent.    One of the main ways in which the completeness of enters the study of sequences is through the following theorem.   Bolzano-Weierstrass Theorem   Every bounded sequence of real numbers has a convergent subsequence.    For a bounded sequence , we construct a subsequence as follows: set . Suppose natural numbers have been chosen for some . By the definition of supremum, there is some natural number such that This inductively defines a strictly increasing sequence of natural numbers and hence a subsequence of .  As a subsequence of the convergent sequence , also converges to by . Since the sequence has the same limit, the squeeze lemma applied to shows that .    In fact, we proved a stronger statement: every bounded sequence contains a subsequence that converges to its limit superior, and likewise a subsequence that converges to its limit inferior. With a slight modification of the proof, one can also show that if a sequence is not bounded above (respectively, below), then it has a subsequence that diverges to (respectively, ).    For any subsequence of a sequence ,     For each , let , and for each , let Then , so for every .  If is not bounded above, then for every , and so . In that case the last inequality is automatic. Otherwise is bounded above, so is a real decreasing sequence converging to . Since is a subsequence of , it has the same limit by . Also, for every , so .  Similarly, if is not bounded below, then for every , and so . In that case the first inequality is automatic. Otherwise is bounded below, so is a real increasing sequence converging to . Since is a subsequence of , it has the same limit. Also, for every , so .  Finally, for every , so . Combining the three inequalities gives the result.    The follow application of the Bolzano-Weierstrass theorem will be used in our discussion of convergence tests for series later.    Let be a sequence of nonzero real numbers. Then     The middle inequality is trivial. We will proof the right inequality. The left inequality has a similar proof, left as exercise. Let If , then the inequality is automatic, so assume that is finite.  Let . By the definition of limit superior, there exists such that for every . So by dropping finitely many terms, we can assume the above inequality holds for every . Thus, for every , and so   Thus, since , implies that . Hence is a bounded sequence and so, by the Bolzano-Weierstrass theorem, contains a subsequence the converges to . Finally, since for each , letting , we conclude that .    We conclude this section with a proof of the Bolzano-Weierstrass theorem that uses only convergence, not limit superior or limit inferior. Its main advantage is that it is more visual.   Monotone Subsequence Lemma   Every real sequence has a subsequence that is either increasing or decreasing.    Let be a real sequence. Call a peak index peak index if for every .  First suppose there are infinitely many peak indices. Choose them in increasing order: Since is a peak index and , we have for every . Hence is a decreasing subsequence.  Now suppose there are only finitely many peak indices. Then there is some such that no is a peak index. Since is not a peak index, there exists such that . Since is not a peak index, there exists such that . Continuing inductively, we obtain a subsequence with Therefore is increasing.  In either case, has a monotone subsequence.    By the lemma above, every sequence has a monotone subsequence. If the original sequence is bounded, then this subsequence is also bounded.  A bounded monotone sequence converges by . This proves the Bolzano-Weierstrass theorem.  "
},
{
  "id": "sec-bolzano-weierstrass-2",
  "level": "2",
  "url": "sec-bolzano-weierstrass.html#sec-bolzano-weierstrass-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "limit superior limit inferior "
},
{
  "id": "prop-convergent-iff-limsup-equals-liminf",
  "level": "2",
  "url": "sec-bolzano-weierstrass.html#prop-convergent-iff-limsup-equals-liminf",
  "type": "Proposition",
  "number": "2.3.1",
  "title": "",
  "body": "  A bounded sequence is convergent if and only if .    Suppose first that . Let . Choose such that for all , Then for any , and so Therefore, is arbitrary closed to and hence must be . Likewise, as well.  Conversely, suppose . Since , we have for every . By the squeeze lemma, . Therefore is convergent.   "
},
{
  "id": "thm-bolzano-weierstrass",
  "level": "2",
  "url": "sec-bolzano-weierstrass.html#thm-bolzano-weierstrass",
  "type": "Theorem",
  "number": "2.3.2",
  "title": "Bolzano-Weierstrass Theorem.",
  "body": " Bolzano-Weierstrass Theorem   Every bounded sequence of real numbers has a convergent subsequence.    For a bounded sequence , we construct a subsequence as follows: set . Suppose natural numbers have been chosen for some . By the definition of supremum, there is some natural number such that This inductively defines a strictly increasing sequence of natural numbers and hence a subsequence of .  As a subsequence of the convergent sequence , also converges to by . Since the sequence has the same limit, the squeeze lemma applied to shows that .   "
},
{
  "id": "prop-subsequence-liminf-limsup-inequalities",
  "level": "2",
  "url": "sec-bolzano-weierstrass.html#prop-subsequence-liminf-limsup-inequalities",
  "type": "Proposition",
  "number": "2.3.3",
  "title": "",
  "body": "  For any subsequence of a sequence ,     For each , let , and for each , let Then , so for every .  If is not bounded above, then for every , and so . In that case the last inequality is automatic. Otherwise is bounded above, so is a real decreasing sequence converging to . Since is a subsequence of , it has the same limit by . Also, for every , so .  Similarly, if is not bounded below, then for every , and so . In that case the first inequality is automatic. Otherwise is bounded below, so is a real increasing sequence converging to . Since is a subsequence of , it has the same limit. Also, for every , so .  Finally, for every , so . Combining the three inequalities gives the result.   "
},
{
  "id": "thm-root-ratio-limsup-inequality",
  "level": "2",
  "url": "sec-bolzano-weierstrass.html#thm-root-ratio-limsup-inequality",
  "type": "Theorem",
  "number": "2.3.4",
  "title": "",
  "body": "  Let be a sequence of nonzero real numbers. Then     The middle inequality is trivial. We will proof the right inequality. The left inequality has a similar proof, left as exercise. Let If , then the inequality is automatic, so assume that is finite.  Let . By the definition of limit superior, there exists such that for every . So by dropping finitely many terms, we can assume the above inequality holds for every . Thus, for every , and so   Thus, since , implies that . Hence is a bounded sequence and so, by the Bolzano-Weierstrass theorem, contains a subsequence the converges to . Finally, since for each , letting , we conclude that .   "
},
{
  "id": "prop-monotone-subsequence",
  "level": "2",
  "url": "sec-bolzano-weierstrass.html#prop-monotone-subsequence",
  "type": "Proposition",
  "number": "2.3.5",
  "title": "Monotone Subsequence Lemma.",
  "body": " Monotone Subsequence Lemma   Every real sequence has a subsequence that is either increasing or decreasing.    Let be a real sequence. Call a peak index peak index if for every .  First suppose there are infinitely many peak indices. Choose them in increasing order: Since is a peak index and , we have for every . Hence is a decreasing subsequence.  Now suppose there are only finitely many peak indices. Then there is some such that no is a peak index. Since is not a peak index, there exists such that . Since is not a peak index, there exists such that . Continuing inductively, we obtain a subsequence with Therefore is increasing.  In either case, has a monotone subsequence.   "
},
{
  "id": "sec-cauchy-sequences",
  "level": "1",
  "url": "sec-cauchy-sequences.html",
  "type": "Section",
  "number": "2.4",
  "title": "Cauchy Sequences",
  "body": " Cauchy Sequences   Sometimes we can show that the terms of a sequence become arbitrarily close to one another even before we know what the limit should be. The next definition isolates that idea.   A sequence is Cauchy sequence Cauchy sequence if for every there exists such that   In other words, all sufficiently far terms of a Cauchy sequence lie close to one another.    The sequence is Cauchy. Indeed, if , then Therefore, once is large enough that , we have for all .      The sequence is not Cauchy. If is even, then . So no tail of the sequence can have all of its terms within distance of each other.      Every convergent sequence is Cauchy.    Suppose . Let . Choose such that for all . Then whenever , the triangle inequality gives Hence is Cauchy.      Every Cauchy sequence is bounded.    Let be Cauchy. Then for some , whenever . In particular, for every , Thus, is bounded by     The converse of need not hold in an arbitrary ordered field.     is sequentially complete sequentially complete . That is, every Cauchy sequence of real numbers converges.    A Cauchy sequence is bounded ( ) hence, by the Bolzano-Weierstrass Theorem ( ) admits a convergent subsequence . Let .  Let . Since is Cauchy, there exists such that whenever . Since , there exists such that for every .  For , because is strictly increasing, . Thus, This shows that .      The ordered field is not sequentially complete. Let be the decimal truncation of to decimal places. Thus Then for every . Hence, for , So is Cauchy. But it cannot converge in , because as a real sequence it converges to , and . Thus is not sequentially complete.    The completeness axiom and sequential completeness do not look alike at first. The completeness axiom is a statement about bounded sets, while sequential completeness is a statement about Cauchy sequences. The link is that one can try to locate the supremum of a nonempty set bounded above by repeatedly choosing a point of the set and an upper bound whose distance keeps shrinking. This produces Cauchy sequences from below and above, and their common limit turns out to be the desired supremum. Thus, for , the two formulations of completeness are equivalent.    Sequential completeness of implies completeness of .    Let be non-empty and bounded above. Let be the set of all upper bounds of . Then is non-empty. Choose and , so in particular, .  We will construct, by induction, sequences in and in such that    is increasing and is decreasing.   for all .   Suppose for some , and ( ) have been chosen such that and . We choose and as follows. Let . Then:  , take and .  If , then we choose an element of that is larger than to be and keep .  In either case, and by  So by induction, we have constructed sequences in and in with the required properties.  Next, we argue that both sequences are Cauchy. For any with , . Hence, Since as , both and are Cauchy and hence convergent by the sequential completeness of . Let and be their limits, respectively.  We claim that . Fix any , since for any , so . Since is arbitrary, we have and for any . Letting , we conclude that .  We now contend that the common limit, say , of and is the supremum of . First, must be an upper bound of . If not, then for some . But since is the limit of , we have for some , contradicting the fact that is an upper bound of . Next, we argue that any is not an upper bound of . Otherwise for each and so , a contradiction. Putting these together shows that , and the proof is complete.    "
},
{
  "id": "sec-cauchy-sequences-3",
  "level": "2",
  "url": "sec-cauchy-sequences.html#sec-cauchy-sequences-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cauchy sequence "
},
{
  "id": "eg-cauchy-one-over-n",
  "level": "2",
  "url": "sec-cauchy-sequences.html#eg-cauchy-one-over-n",
  "type": "Example",
  "number": "2.4.1",
  "title": "",
  "body": "  The sequence is Cauchy. Indeed, if , then Therefore, once is large enough that , we have for all .   "
},
{
  "id": "eg-not-cauchy-alternating",
  "level": "2",
  "url": "sec-cauchy-sequences.html#eg-not-cauchy-alternating",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": "  The sequence is not Cauchy. If is even, then . So no tail of the sequence can have all of its terms within distance of each other.   "
},
{
  "id": "prop-convergent-implies-cauchy",
  "level": "2",
  "url": "sec-cauchy-sequences.html#prop-convergent-implies-cauchy",
  "type": "Proposition",
  "number": "2.4.3",
  "title": "",
  "body": "  Every convergent sequence is Cauchy.    Suppose . Let . Choose such that for all . Then whenever , the triangle inequality gives Hence is Cauchy.   "
},
{
  "id": "prop-cauchy-sequence-bounded",
  "level": "2",
  "url": "sec-cauchy-sequences.html#prop-cauchy-sequence-bounded",
  "type": "Proposition",
  "number": "2.4.4",
  "title": "",
  "body": "  Every Cauchy sequence is bounded.    Let be Cauchy. Then for some , whenever . In particular, for every , Thus, is bounded by    "
},
{
  "id": "thm-sequential-completeness-of-reals",
  "level": "2",
  "url": "sec-cauchy-sequences.html#thm-sequential-completeness-of-reals",
  "type": "Theorem",
  "number": "2.4.5",
  "title": "",
  "body": "   is sequentially complete sequentially complete . That is, every Cauchy sequence of real numbers converges.    A Cauchy sequence is bounded ( ) hence, by the Bolzano-Weierstrass Theorem ( ) admits a convergent subsequence . Let .  Let . Since is Cauchy, there exists such that whenever . Since , there exists such that for every .  For , because is strictly increasing, . Thus, This shows that .   "
},
{
  "id": "eg-q-not-sequentially-complete",
  "level": "2",
  "url": "sec-cauchy-sequences.html#eg-q-not-sequentially-complete",
  "type": "Example",
  "number": "2.4.6",
  "title": "",
  "body": "  The ordered field is not sequentially complete. Let be the decimal truncation of to decimal places. Thus Then for every . Hence, for , So is Cauchy. But it cannot converge in , because as a real sequence it converges to , and . Thus is not sequentially complete.   "
},
{
  "id": "prop-sequential-completeness-implies-lub",
  "level": "2",
  "url": "sec-cauchy-sequences.html#prop-sequential-completeness-implies-lub",
  "type": "Proposition",
  "number": "2.4.7",
  "title": "",
  "body": "  Sequential completeness of implies completeness of .    Let be non-empty and bounded above. Let be the set of all upper bounds of . Then is non-empty. Choose and , so in particular, .  We will construct, by induction, sequences in and in such that    is increasing and is decreasing.   for all .   Suppose for some , and ( ) have been chosen such that and . We choose and as follows. Let . Then:  , take and .  If , then we choose an element of that is larger than to be and keep .  In either case, and by  So by induction, we have constructed sequences in and in with the required properties.  Next, we argue that both sequences are Cauchy. For any with , . Hence, Since as , both and are Cauchy and hence convergent by the sequential completeness of . Let and be their limits, respectively.  We claim that . Fix any , since for any , so . Since is arbitrary, we have and for any . Letting , we conclude that .  We now contend that the common limit, say , of and is the supremum of . First, must be an upper bound of . If not, then for some . But since is the limit of , we have for some , contradicting the fact that is an upper bound of . Next, we argue that any is not an upper bound of . Otherwise for each and so , a contradiction. Putting these together shows that , and the proof is complete.   "
},
{
  "id": "ex-ch2",
  "level": "1",
  "url": "ex-ch2.html",
  "type": "Exercises",
  "number": "2.5",
  "title": "Exercises",
  "body": " Exercises    Prove directly from the definition that is a null sequence.      Let . Show that is increasing and converges. Find its limit.      Use the squeeze lemma to prove that .      Give a divergent sequence that has a convergent subsequence.      For each of the following sequences, compute its limit superior and limit inferior.             Show that the following statements are equivalent: (i) , (ii) and (iii) .      Compute the limit superior and limit inferior, in the extended real numbers, of each of the following sequences.          Consider the sequence .  Find a subsequence converging to and a subsequence converging to . Determine all limits of convergent subsequences of .      Suppose exists. Show that there is a sequence in that converges to .      Let be a bounded sequence. Suppose every convergent subsequence of has the same limit . Prove that converges to .      Prove directly from the definition that is a Cauchy sequence.      Prove that every subsequence of a Cauchy sequence is Cauchy.      Give an example of a bounded sequence that is not Cauchy. Justify your answer.      Let be the decimal truncation of to decimal places, so that   Show that is Cauchy in . Explain why it does not converge in , and conclude that is not sequentially complete.      Determine whether each sequence converges. If it does, find its limit.           Use the ratio test to prove that .      Use the ratio test to prove that .      Give two sequences of nonzero real numbers and such that and , but is null while is unbounded.    "
},
{
  "id": "ex-sequences-null-basic",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-null-basic",
  "type": "Exercise",
  "number": "2.5.1",
  "title": "",
  "body": "  Prove directly from the definition that is a null sequence.   "
},
{
  "id": "ex-sequences-monotone-bounded-convergent",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-monotone-bounded-convergent",
  "type": "Exercise",
  "number": "2.5.2",
  "title": "",
  "body": "  Let . Show that is increasing and converges. Find its limit.   "
},
{
  "id": "ex-sequences-squeeze",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-squeeze",
  "type": "Exercise",
  "number": "2.5.3",
  "title": "",
  "body": "  Use the squeeze lemma to prove that .   "
},
{
  "id": "ex-sequences-subsequence-divergent-example",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-subsequence-divergent-example",
  "type": "Exercise",
  "number": "2.5.4",
  "title": "",
  "body": "  Give a divergent sequence that has a convergent subsequence.   "
},
{
  "id": "ex-sequences-limsup-liminf-bounded-examples",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-limsup-liminf-bounded-examples",
  "type": "Exercise",
  "number": "2.5.5",
  "title": "",
  "body": "  For each of the following sequences, compute its limit superior and limit inferior.          "
},
{
  "id": "ex-sequences-null-neg-abs-equiv",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-null-neg-abs-equiv",
  "type": "Exercise",
  "number": "2.5.6",
  "title": "",
  "body": "  Show that the following statements are equivalent: (i) , (ii) and (iii) .   "
},
{
  "id": "ex-sequences-limsup-liminf-unbounded-examples",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-limsup-liminf-unbounded-examples",
  "type": "Exercise",
  "number": "2.5.7",
  "title": "",
  "body": "  Compute the limit superior and limit inferior, in the extended real numbers, of each of the following sequences.       "
},
{
  "id": "ex-sequences-limsup-liminf-subsequences-example",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-limsup-liminf-subsequences-example",
  "type": "Exercise",
  "number": "2.5.8",
  "title": "",
  "body": "  Consider the sequence .  Find a subsequence converging to and a subsequence converging to . Determine all limits of convergent subsequences of .   "
},
{
  "id": "ex-sequences-approximate-sup",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-approximate-sup",
  "type": "Exercise",
  "number": "2.5.9",
  "title": "",
  "body": "  Suppose exists. Show that there is a sequence in that converges to .   "
},
{
  "id": "ex-sequences-unique-subsequential-limit",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-unique-subsequential-limit",
  "type": "Exercise",
  "number": "2.5.10",
  "title": "",
  "body": "  Let be a bounded sequence. Suppose every convergent subsequence of has the same limit . Prove that converges to .   "
},
{
  "id": "ex-sequences-cauchy-direct",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-cauchy-direct",
  "type": "Exercise",
  "number": "2.5.11",
  "title": "",
  "body": "  Prove directly from the definition that is a Cauchy sequence.   "
},
{
  "id": "ex-sequences-cauchy-subsequence",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-cauchy-subsequence",
  "type": "Exercise",
  "number": "2.5.12",
  "title": "",
  "body": "  Prove that every subsequence of a Cauchy sequence is Cauchy.   "
},
{
  "id": "ex-sequences-bounded-not-cauchy",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-bounded-not-cauchy",
  "type": "Exercise",
  "number": "2.5.13",
  "title": "",
  "body": "  Give an example of a bounded sequence that is not Cauchy. Justify your answer.   "
},
{
  "id": "ex-sequences-q-not-sequentially-complete",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-q-not-sequentially-complete",
  "type": "Exercise",
  "number": "2.5.14",
  "title": "",
  "body": "  Let be the decimal truncation of to decimal places, so that   Show that is Cauchy in . Explain why it does not converge in , and conclude that is not sequentially complete.   "
},
{
  "id": "ex-sequences-geometric-negative-base",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-geometric-negative-base",
  "type": "Exercise",
  "number": "2.5.15",
  "title": "",
  "body": "  Determine whether each sequence converges. If it does, find its limit.        "
},
{
  "id": "ex-sequences-ratio-test-power-over-exponential",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-ratio-test-power-over-exponential",
  "type": "Exercise",
  "number": "2.5.16",
  "title": "",
  "body": "  Use the ratio test to prove that .   "
},
{
  "id": "ex-sequences-ratio-test-factorial",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-ratio-test-factorial",
  "type": "Exercise",
  "number": "2.5.17",
  "title": "",
  "body": "  Use the ratio test to prove that .   "
},
{
  "id": "ex-sequences-ratio-test-inconclusive",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-ratio-test-inconclusive",
  "type": "Exercise",
  "number": "2.5.18",
  "title": "",
  "body": "  Give two sequences of nonzero real numbers and such that and , but is null while is unbounded.   "
},
{
  "id": "sec-series",
  "level": "1",
  "url": "sec-series.html",
  "type": "Section",
  "number": "3.1",
  "title": "Series",
  "body": " Series  A series series is the sum of a sequence. We write for the finite sum This is just convenient notation, but it will also guide the definition of an infinite series.  Given an infinite sequence , the expression is called an infinite series series infinite . To make sense of it, we consider its sequence of partial sums series sequence of partial sums  , where We say that the series  converges convergent series if the sequence converges. In that case, we write where is the limit of . The series diverges divergent series if it does not converge. We also write (resp. if diverges to (resp. ).  Since altering finitely many terms will not affect the convergence of a series, so if we concern only about convergence, we will drop the indices and simply write for the series whose terms are from the sequence .   Divergence Test   If the series converges, then .    Suppose converges to . That mean it sequence of partial sums converges to . But then the sequence also has as its limit. Therefore, This show that is null.      The series and are both divergent by the divergence test. These series are examples of geometry series.    A geometric series geometric series is a series whose terms form a geometric series. We will show in the next section that the geometric series converges when and diverges when .  The converse statement of the divergence test is false: a null sequence need not give a convergent series. The standard example is the harmonic series harmonic series  . We will prove in the next section that this series diverges even though .  A series is absolutely convergent absolutely convergent series if the series converges. It is conditionally convergent conditionally convergent series if converges but diverges.    The series is absolutely convergent, while the alternating harmonic series is conditionally convergent. We defer the justifications to the next section, where we develop tests for convergence of series.    The distinction between absolute and conditional convergence is important. Absolute convergence behaves much like finite summation, but conditional convergence can be surprisingly unstable under rearrangement of terms.  A rearrangement rearrangement of series of the series is a series of the form , where is a bijection.   Riemann Rearrangement Theorem   If is conditionally convergent and , then there is a rearrangement of the series that converges to . Moreover, there are rearrangements that diverge to and rearrangements that diverge to .    We will not prove this theorem here. A proof can be found at . That page also cites Rudin, \"Principles of Mathematical Analysis\", Theorem 3.54.  "
},
{
  "id": "sec-series-2",
  "level": "2",
  "url": "sec-series.html#sec-series-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "series "
},
{
  "id": "sec-series-3",
  "level": "2",
  "url": "sec-series.html#sec-series-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "infinite series sequence of partial sums converges diverges "
},
{
  "id": "prop-divergence-test-series",
  "level": "2",
  "url": "sec-series.html#prop-divergence-test-series",
  "type": "Proposition",
  "number": "3.1.1",
  "title": "Divergence Test.",
  "body": " Divergence Test   If the series converges, then .    Suppose converges to . That mean it sequence of partial sums converges to . But then the sequence also has as its limit. Therefore, This show that is null.   "
},
{
  "id": "eg-series-basic-examples",
  "level": "2",
  "url": "sec-series.html#eg-series-basic-examples",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": "  The series and are both divergent by the divergence test. These series are examples of geometry series.   "
},
{
  "id": "sec-series-7",
  "level": "2",
  "url": "sec-series.html#sec-series-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometric series "
},
{
  "id": "sec-series-8",
  "level": "2",
  "url": "sec-series.html#sec-series-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "harmonic series "
},
{
  "id": "sec-series-9",
  "level": "2",
  "url": "sec-series.html#sec-series-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "absolutely convergent conditionally convergent "
},
{
  "id": "eg-series-absolute-conditional",
  "level": "2",
  "url": "sec-series.html#eg-series-absolute-conditional",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  The series is absolutely convergent, while the alternating harmonic series is conditionally convergent. We defer the justifications to the next section, where we develop tests for convergence of series.   "
},
{
  "id": "sec-series-12",
  "level": "2",
  "url": "sec-series.html#sec-series-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rearrangement "
},
{
  "id": "thm-riemann-rearrangement",
  "level": "2",
  "url": "sec-series.html#thm-riemann-rearrangement",
  "type": "Theorem",
  "number": "3.1.4",
  "title": "Riemann Rearrangement Theorem.",
  "body": " Riemann Rearrangement Theorem   If is conditionally convergent and , then there is a rearrangement of the series that converges to . Moreover, there are rearrangements that diverge to and rearrangements that diverge to .   "
},
{
  "id": "sec-convergence-tests-for-series",
  "level": "1",
  "url": "sec-convergence-tests-for-series.html",
  "type": "Section",
  "number": "3.2",
  "title": "Convergence Tests for Series",
  "body": " Convergence Tests for Series   In we defined convergence of a series and proved the divergence test ( ). Here we develop positive tests that help us decide whether a series converges.  A series is called a Cauchy series Cauchy series if its sequence of partial sums is a Cauchy sequence. By and , a series of real numbers converges if and only if it is Cauchy.    Geometric Series   Geometric Series   Let . The geometric series converges to when , and diverges when .    Let . If , then so   Suppose first that . Then by and so is null. Therefore, , and the series converges to that value.  If , then for all , so is not a null sequence. Thus, the series diverges by .      Taking gives Taking gives       Series with Nonnegative Terms  For a series with nonnegative terms, the sequence of partial sums is automatically increasing. This gives a useful criterion.   Nonnegative Term Criterion   Suppose for all . Then the series converges if and only if its sequence of partial sums is bounded above.    Let . Since each , we have , so is increasing. An increasing sequence converges if and only if it is bounded above by . Since the series converges exactly when converges, the result follows.      The harmonic series diverges.    Group the terms as For each , the block from to has terms, and each of those terms is at least . Hence each block has sum at least . Therefore the partial sums are unbounded above, so the series diverges by .    The previous example is the basic comparison for the -series p-series .   -Series Test   For , the series converges if and only if .    If , then for all . Hence every partial sum of is at least as large as the corresponding partial sum of the harmonic series. Since the harmonic series diverges by , the series also diverges.  Now suppose . For each , every with satisfies . Therefore Since , the geometric series converges by . Hence the partial sums of are bounded above, and so the series converges by .    For series with non-negative terms, convergence and absolute convergence mean the same thing. In general, absolute convergence implies convergence. The converse is false, since there are conditionally convergent series, for example the alternating series ( ).   Absolute Convergence Test   If the series converges, then the series converges.    Let and . Since converges, it is Cauchy by . If , then Hence is also Cauchy. By , the sequence converges, so converges.      Comparison Tests  The first comparison tool is the comparison test comparison test for series .   Comparison Test   Suppose for all . If converges, then converges.    Let and . Then for every . If converges, then is bounded above. Consequently is bounded above as well, and shows that converges.    A useful refinement is the limit comparison test limit comparison test .   Limit Comparison Test   Suppose and for all . If for some , then converges if and only if converges.  If instead then convergence of implies convergence of .    First suppose . Then for all sufficiently large  Since , this is equivalent to If converges, then so does , and the comparison test gives convergence of . Conversely, if converges, then so does , and the comparison test applied to shows that converges.  If , then for all sufficiently large  . Hence eventually, so convergence of implies convergence of by the comparison test.      The series converges. Indeed, and converges by . Therefore converges by .      Ratio and Root Tests  The next tests compare a series to a geometric series. The first is the ratio test ratio test for series .   Ratio Test   Let be a sequence of real numbers such that for all sufficiently large , and suppose If , then converges absolutely. If , then diverges.    Suppose . Then , so for all sufficiently large, By dropping finitely many terms, which does not affect convergence, we can assume the inequality holds for all . Hence, Since , converges by and the comparison test implies that converges. Therefore converges absolutely.  Now suppose , and set . Then , so there exists such that for all . In particular, is eventually strictly increasing, so it cannot converge to . Therefore diverges by .      The series converges absolutely, because     If the ratio limit is , the ratio test gives no conclusion: both and have consecutive-term ratio tending to , but the first diverges and the second converges.  The root test root test for series provides another way of comparing a series with a geometric series. It is often more convenient when an explicit -th power appears in the terms.   Root Test   Let If , then converges absolutely. If , then diverges.    Suppose . Then for some , That means for all . Since , the geometric series converges, and by the comparison test so does .  Now suppose , and let . Then . By the definition of limit superior, for every , Hence for every there exists such that . Therefore for infinitely many . As a result cannot be a null sequence, and diverges by .      The series converges absolutely, because     The root test is also inconclusive when . For example, diverges while converges, but both satisfy .  By , if the limit exists, then Therefore the root test is at least as strong as the ratio test. The following example shows that it is strictly stronger.    The root test can succeed even when the ratio test fails. Consider the series where Then so . Hence the root test shows that converges absolutely.  On the other hand, so one subsequence tends to and the other tends to . Therefore has no limit, and the ratio test does not apply.      Alternating Series  The final test in this section is the alternating series test alternating series test .   Alternating Series Test   Suppose for all , the sequence is decreasing, and . Then the alternating series converges.    Let . Then so the even partial sums form an increasing sequence. Also, so the odd partial sums form a decreasing sequence.  For every , we have . Thus is increasing and bounded above, so it converges by . Write . Since the limit laws imply that as well. Therefore the whole sequence of partial sums converges to , and the series converges.      The alternating harmonic series converges by , because is decreasing and null. It is not absolutely convergent, since diverges. Hence it is conditionally convergent.    The proof shows more: if , then the error after terms satisfies So the first omitted term controls the truncation error.    References: compare , Sections 2.5-2.6, for a treatment close to the organization of this section, , Chapter 3, for a more concise treatment, and for additional worked examples.   "
},
{
  "id": "sec-convergence-tests-for-series-2-2",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#sec-convergence-tests-for-series-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cauchy series "
},
{
  "id": "prop-geometric-series",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#prop-geometric-series",
  "type": "Proposition",
  "number": "3.2.1",
  "title": "Geometric Series.",
  "body": " Geometric Series   Let . The geometric series converges to when , and diverges when .    Let . If , then so   Suppose first that . Then by and so is null. Therefore, , and the series converges to that value.  If , then for all , so is not a null sequence. Thus, the series diverges by .   "
},
{
  "id": "eg-geometric-series-basic",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#eg-geometric-series-basic",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": "  Taking gives Taking gives    "
},
{
  "id": "prop-nonnegative-series-criterion",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#prop-nonnegative-series-criterion",
  "type": "Proposition",
  "number": "3.2.3",
  "title": "Nonnegative Term Criterion.",
  "body": " Nonnegative Term Criterion   Suppose for all . Then the series converges if and only if its sequence of partial sums is bounded above.    Let . Since each , we have , so is increasing. An increasing sequence converges if and only if it is bounded above by . Since the series converges exactly when converges, the result follows.   "
},
{
  "id": "eg-harmonic-series-diverges",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#eg-harmonic-series-diverges",
  "type": "Example",
  "number": "3.2.4",
  "title": "",
  "body": "  The harmonic series diverges.    Group the terms as For each , the block from to has terms, and each of those terms is at least . Hence each block has sum at least . Therefore the partial sums are unbounded above, so the series diverges by .   "
},
{
  "id": "subsec-series-positive-terms-5",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#subsec-series-positive-terms-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-series "
},
{
  "id": "prop-p-series-test",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#prop-p-series-test",
  "type": "Proposition",
  "number": "3.2.5",
  "title": "<span class=\"process-math\">\\(p\\)<\/span>-Series Test.",
  "body": " -Series Test   For , the series converges if and only if .    If , then for all . Hence every partial sum of is at least as large as the corresponding partial sum of the harmonic series. Since the harmonic series diverges by , the series also diverges.  Now suppose . For each , every with satisfies . Therefore Since , the geometric series converges by . Hence the partial sums of are bounded above, and so the series converges by .   "
},
{
  "id": "prop-absolute-convergence-implies-convergence",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#prop-absolute-convergence-implies-convergence",
  "type": "Proposition",
  "number": "3.2.6",
  "title": "Absolute Convergence Test.",
  "body": " Absolute Convergence Test   If the series converges, then the series converges.    Let and . Since converges, it is Cauchy by . If , then Hence is also Cauchy. By , the sequence converges, so converges.   "
},
{
  "id": "subsec-series-comparison-tests-2",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#subsec-series-comparison-tests-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "comparison test "
},
{
  "id": "prop-comparison-test-series",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#prop-comparison-test-series",
  "type": "Proposition",
  "number": "3.2.7",
  "title": "Comparison Test.",
  "body": " Comparison Test   Suppose for all . If converges, then converges.    Let and . Then for every . If converges, then is bounded above. Consequently is bounded above as well, and shows that converges.   "
},
{
  "id": "subsec-series-comparison-tests-4",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#subsec-series-comparison-tests-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "limit comparison test "
},
{
  "id": "prop-limit-comparison-test-series",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#prop-limit-comparison-test-series",
  "type": "Proposition",
  "number": "3.2.8",
  "title": "Limit Comparison Test.",
  "body": " Limit Comparison Test   Suppose and for all . If for some , then converges if and only if converges.  If instead then convergence of implies convergence of .    First suppose . Then for all sufficiently large  Since , this is equivalent to If converges, then so does , and the comparison test gives convergence of . Conversely, if converges, then so does , and the comparison test applied to shows that converges.  If , then for all sufficiently large  . Hence eventually, so convergence of implies convergence of by the comparison test.   "
},
{
  "id": "eg-limit-comparison-n-cubed-minus-one",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#eg-limit-comparison-n-cubed-minus-one",
  "type": "Example",
  "number": "3.2.9",
  "title": "",
  "body": "  The series converges. Indeed, and converges by . Therefore converges by .   "
},
{
  "id": "subsec-series-ratio-root-tests-2",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#subsec-series-ratio-root-tests-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ratio test "
},
{
  "id": "prop-ratio-test-series",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#prop-ratio-test-series",
  "type": "Proposition",
  "number": "3.2.10",
  "title": "Ratio Test.",
  "body": " Ratio Test   Let be a sequence of real numbers such that for all sufficiently large , and suppose If , then converges absolutely. If , then diverges.    Suppose . Then , so for all sufficiently large, By dropping finitely many terms, which does not affect convergence, we can assume the inequality holds for all . Hence, Since , converges by and the comparison test implies that converges. Therefore converges absolutely.  Now suppose , and set . Then , so there exists such that for all . In particular, is eventually strictly increasing, so it cannot converge to . Therefore diverges by .   "
},
{
  "id": "eg-ratio-test-series-polynomial-over-exponential",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#eg-ratio-test-series-polynomial-over-exponential",
  "type": "Example",
  "number": "3.2.11",
  "title": "",
  "body": "  The series converges absolutely, because    "
},
{
  "id": "subsec-series-ratio-root-tests-6",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#subsec-series-ratio-root-tests-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "root test "
},
{
  "id": "prop-root-test-series",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#prop-root-test-series",
  "type": "Proposition",
  "number": "3.2.12",
  "title": "Root Test.",
  "body": " Root Test   Let If , then converges absolutely. If , then diverges.    Suppose . Then for some , That means for all . Since , the geometric series converges, and by the comparison test so does .  Now suppose , and let . Then . By the definition of limit superior, for every , Hence for every there exists such that . Therefore for infinitely many . As a result cannot be a null sequence, and diverges by .   "
},
{
  "id": "eg-root-test-series-nth-power",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#eg-root-test-series-nth-power",
  "type": "Example",
  "number": "3.2.13",
  "title": "",
  "body": "  The series converges absolutely, because    "
},
{
  "id": "eg-root-test-stronger-than-ratio-test",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#eg-root-test-stronger-than-ratio-test",
  "type": "Example",
  "number": "3.2.14",
  "title": "",
  "body": "  The root test can succeed even when the ratio test fails. Consider the series where Then so . Hence the root test shows that converges absolutely.  On the other hand, so one subsequence tends to and the other tends to . Therefore has no limit, and the ratio test does not apply.   "
},
{
  "id": "subsec-series-alternating-2",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#subsec-series-alternating-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "alternating series test "
},
{
  "id": "prop-alternating-series-test",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#prop-alternating-series-test",
  "type": "Proposition",
  "number": "3.2.15",
  "title": "Alternating Series Test.",
  "body": " Alternating Series Test   Suppose for all , the sequence is decreasing, and . Then the alternating series converges.    Let . Then so the even partial sums form an increasing sequence. Also, so the odd partial sums form a decreasing sequence.  For every , we have . Thus is increasing and bounded above, so it converges by . Write . Since the limit laws imply that as well. Therefore the whole sequence of partial sums converges to , and the series converges.   "
},
{
  "id": "eg-alternating-harmonic-series",
  "level": "2",
  "url": "sec-convergence-tests-for-series.html#eg-alternating-harmonic-series",
  "type": "Example",
  "number": "3.2.16",
  "title": "",
  "body": "  The alternating harmonic series converges by , because is decreasing and null. It is not absolutely convergent, since diverges. Hence it is conditionally convergent.   "
},
{
  "id": "sec-more-convergence-tests-for-series",
  "level": "1",
  "url": "sec-more-convergence-tests-for-series.html",
  "type": "Section",
  "number": "3.3",
  "title": "More Convergence Tests for Series",
  "body": " More Convergence Tests for Series   The tests in are enough for many examples, but two further tools are often useful. The first concerns products of convergent series, and the second sharpens the ratio test in the borderline case when the quotient of consecutive terms tends to .    Cauchy Products  Given two series their Cauchy product Cauchy product is the series The coefficient is the sum of all products whose indices add to .   Mertens' Theorem   Suppose both converge, and suppose that at least one of these series converges absolutely. Then the Cauchy product converges, and     We omit the proof. See , Chapter 3, or , Chapter 9.      Let . The Cauchy product of has coefficients Since the geometric series converges absolutely for by , Mertens' theorem gives       The Cauchy product of two conditionally convergent series may diverge. Consider By the alternating series test ( ), the series converges. It is not absolutely convergent, because diverges by the -series test ( ).  If for , then For with , we have , so Since there are such pairs, it follows that Thus , and the Cauchy product diverges by .      Raabe's Test  The ratio test is inconclusive when . Raabe's test refines that situation by measuring how quickly the ratio approaches .   Raabe's Test   Let be a sequence of nonzero real numbers.    If there exists such that for all sufficiently large , then converges absolutely.    If there exists such that for all sufficiently large , then does not converge absolutely.      We first prove part (1). By discarding finitely many terms, we may assume the displayed inequality holds for every . Then for every . Rearranging gives   Summing from to , we obtain Hence the partial sums of are bounded above. By , the series converges. Therefore converges absolutely.  Now consider part (2). Again we may discard finitely many terms and assume the inequality holds for all . Then for every . Thus the sequence is increasing. Since , we have , and therefore for every . Because the harmonic series diverges by , the comparison test shows that diverges. So is not absolutely convergent.     Limit Form of Raabe's Test   Let be a sequence of nonzero real numbers, and suppose the limit exists.   If , then converges absolutely.  If , then does not converge absolutely.     Suppose . Choose a number with . Then for all sufficiently large , Rearranging, we obtain eventually. Part (1) of now shows that converges absolutely.  Suppose instead that . Choose with . Then for all sufficiently large , so eventually. Part (2) of implies that is not absolutely convergent.      Raabe's test recovers the -series criterion for . Let . Then A short computation shows Therefore gives absolute convergence when and failure of absolute convergence when . Since the terms are nonnegative, this means the series diverges when . The case is inconclusive for Raabe's test.      References: compare , Chapter 3, for Cauchy products, and for Raabe's test and related refinements of the ratio test.   "
},
{
  "id": "subsec-series-cauchy-products-2",
  "level": "2",
  "url": "sec-more-convergence-tests-for-series.html#subsec-series-cauchy-products-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cauchy product "
},
{
  "id": "thm-mertens-series",
  "level": "2",
  "url": "sec-more-convergence-tests-for-series.html#thm-mertens-series",
  "type": "Theorem",
  "number": "3.3.1",
  "title": "Mertens’ Theorem.",
  "body": " Mertens' Theorem   Suppose both converge, and suppose that at least one of these series converges absolutely. Then the Cauchy product converges, and     We omit the proof. See , Chapter 3, or , Chapter 9.   "
},
{
  "id": "eg-cauchy-product-geometric-square",
  "level": "2",
  "url": "sec-more-convergence-tests-for-series.html#eg-cauchy-product-geometric-square",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  Let . The Cauchy product of has coefficients Since the geometric series converges absolutely for by , Mertens' theorem gives    "
},
{
  "id": "eg-cauchy-product-conditional-divergence",
  "level": "2",
  "url": "sec-more-convergence-tests-for-series.html#eg-cauchy-product-conditional-divergence",
  "type": "Example",
  "number": "3.3.3",
  "title": "",
  "body": "  The Cauchy product of two conditionally convergent series may diverge. Consider By the alternating series test ( ), the series converges. It is not absolutely convergent, because diverges by the -series test ( ).  If for , then For with , we have , so Since there are such pairs, it follows that Thus , and the Cauchy product diverges by .   "
},
{
  "id": "prop-raabe-test-series",
  "level": "2",
  "url": "sec-more-convergence-tests-for-series.html#prop-raabe-test-series",
  "type": "Proposition",
  "number": "3.3.4",
  "title": "Raabe’s Test.",
  "body": " Raabe's Test   Let be a sequence of nonzero real numbers.    If there exists such that for all sufficiently large , then converges absolutely.    If there exists such that for all sufficiently large , then does not converge absolutely.      We first prove part (1). By discarding finitely many terms, we may assume the displayed inequality holds for every . Then for every . Rearranging gives   Summing from to , we obtain Hence the partial sums of are bounded above. By , the series converges. Therefore converges absolutely.  Now consider part (2). Again we may discard finitely many terms and assume the inequality holds for all . Then for every . Thus the sequence is increasing. Since , we have , and therefore for every . Because the harmonic series diverges by , the comparison test shows that diverges. So is not absolutely convergent.   "
},
{
  "id": "cor-raabe-limit-form-series",
  "level": "2",
  "url": "sec-more-convergence-tests-for-series.html#cor-raabe-limit-form-series",
  "type": "Corollary",
  "number": "3.3.5",
  "title": "Limit Form of Raabe’s Test.",
  "body": " Limit Form of Raabe's Test   Let be a sequence of nonzero real numbers, and suppose the limit exists.   If , then converges absolutely.  If , then does not converge absolutely.     Suppose . Choose a number with . Then for all sufficiently large , Rearranging, we obtain eventually. Part (1) of now shows that converges absolutely.  Suppose instead that . Choose with . Then for all sufficiently large , so eventually. Part (2) of implies that is not absolutely convergent.   "
},
{
  "id": "eg-raabe-p-series",
  "level": "2",
  "url": "sec-more-convergence-tests-for-series.html#eg-raabe-p-series",
  "type": "Example",
  "number": "3.3.6",
  "title": "",
  "body": "  Raabe's test recovers the -series criterion for . Let . Then A short computation shows Therefore gives absolute convergence when and failure of absolute convergence when . Since the terms are nonnegative, this means the series diverges when . The case is inconclusive for Raabe's test.   "
},
{
  "id": "ex-ch3",
  "level": "1",
  "url": "ex-ch3.html",
  "type": "Exercises",
  "number": "3.4",
  "title": "Exercises",
  "body": " Exercises    Determine whether each of the following series converges. If it converges, find its sum.  a) b) c)       Use the comparison test to prove that converges.      Determine whether each series converges or diverges.  a) b) c)       Use the limit comparison test to determine whether converges.      Determine whether each series is absolutely convergent, conditionally convergent, or divergent.  a) b) c)       Use the ratio test to prove that converges absolutely.      Use the ratio test to show that diverges.      Use the root test to determine whether converges.      Give two series and such that , but converges and diverges.      Let Find such that       Let . Compute the Cauchy product of with itself and use to prove that       Use the limit form of Raabe's test ( ) to give another proof that converges for and diverges for . Explain why the case is inconclusive for Raabe's test.    "
},
{
  "id": "ex-series-geometric-basic",
  "level": "2",
  "url": "ex-ch3.html#ex-series-geometric-basic",
  "type": "Exercise",
  "number": "3.4.1",
  "title": "",
  "body": "  Determine whether each of the following series converges. If it converges, find its sum.  a) b) c)    "
},
{
  "id": "ex-series-comparison-quadratic",
  "level": "2",
  "url": "ex-ch3.html#ex-series-comparison-quadratic",
  "type": "Exercise",
  "number": "3.4.2",
  "title": "",
  "body": "  Use the comparison test to prove that converges.   "
},
{
  "id": "ex-series-p-test-examples",
  "level": "2",
  "url": "ex-ch3.html#ex-series-p-test-examples",
  "type": "Exercise",
  "number": "3.4.3",
  "title": "",
  "body": "  Determine whether each series converges or diverges.  a) b) c)    "
},
{
  "id": "ex-series-limit-comparison-cubic",
  "level": "2",
  "url": "ex-ch3.html#ex-series-limit-comparison-cubic",
  "type": "Exercise",
  "number": "3.4.4",
  "title": "",
  "body": "  Use the limit comparison test to determine whether converges.   "
},
{
  "id": "ex-series-absolute-conditional-classification",
  "level": "2",
  "url": "ex-ch3.html#ex-series-absolute-conditional-classification",
  "type": "Exercise",
  "number": "3.4.5",
  "title": "",
  "body": "  Determine whether each series is absolutely convergent, conditionally convergent, or divergent.  a) b) c)    "
},
{
  "id": "ex-series-ratio-test-polynomial-over-exponential",
  "level": "2",
  "url": "ex-ch3.html#ex-series-ratio-test-polynomial-over-exponential",
  "type": "Exercise",
  "number": "3.4.6",
  "title": "",
  "body": "  Use the ratio test to prove that converges absolutely.   "
},
{
  "id": "ex-series-ratio-test-factorial-over-exponential",
  "level": "2",
  "url": "ex-ch3.html#ex-series-ratio-test-factorial-over-exponential",
  "type": "Exercise",
  "number": "3.4.7",
  "title": "",
  "body": "  Use the ratio test to show that diverges.   "
},
{
  "id": "ex-series-root-test-nth-power",
  "level": "2",
  "url": "ex-ch3.html#ex-series-root-test-nth-power",
  "type": "Exercise",
  "number": "3.4.8",
  "title": "",
  "body": "  Use the root test to determine whether converges.   "
},
{
  "id": "ex-series-root-test-inconclusive",
  "level": "2",
  "url": "ex-ch3.html#ex-series-root-test-inconclusive",
  "type": "Exercise",
  "number": "3.4.9",
  "title": "",
  "body": "  Give two series and such that , but converges and diverges.   "
},
{
  "id": "ex-series-alternating-harmonic-error",
  "level": "2",
  "url": "ex-ch3.html#ex-series-alternating-harmonic-error",
  "type": "Exercise",
  "number": "3.4.10",
  "title": "",
  "body": "  Let Find such that    "
},
{
  "id": "ex-series-cauchy-product-geometric",
  "level": "2",
  "url": "ex-ch3.html#ex-series-cauchy-product-geometric",
  "type": "Exercise",
  "number": "3.4.11",
  "title": "",
  "body": "  Let . Compute the Cauchy product of with itself and use to prove that    "
},
{
  "id": "ex-series-raabe-p-series",
  "level": "2",
  "url": "ex-ch3.html#ex-series-raabe-p-series",
  "type": "Exercise",
  "number": "3.4.12",
  "title": "",
  "body": "  Use the limit form of Raabe's test ( ) to give another proof that converges for and diverges for . Explain why the case is inconclusive for Raabe's test.   "
},
{
  "id": "sec-definition-of-continuity-examples",
  "level": "1",
  "url": "sec-definition-of-continuity-examples.html",
  "type": "Section",
  "number": "4.1",
  "title": "Definition of Continuity. Examples.",
  "body": " Definition of Continuity. Examples.   Continuity at a Point  Let and let be a function. We say that is continuous at continuous at a point  if for every there exists such that whenever and , we have In other words, is continuous at if the output can be made arbitrarily close to provided that the input is sufficiently close to .  If , then is continuous on continuous on a set  if it is continuous at every point of . We say simply that is continuous continuous function if it is continuous on its whole domain.  The definition only refers to points that lie in the domain . So continuity at concerns the behavior of on domain points near ; we do not need to be defined on an entire open interval around .    Cluster Points and Isolated Points  A neighborhood of a point is a subset of that contains an open interval around . In particular, every open interval containing is a neighborhood of .  Let . A real number is called a cluster point cluster point of if for every there exists such that and . In other words, is a cluster point of if every neighborhood of contains a point in other than . A point is an isolated point isolated point of if it is not a cluster point of . That is, there exists such that Equivalently, some neighborhood of contains no points of other than . A cluster point of need not belong to , but an isolated point of , by definition, must belong to .     Every point of an open interval is a cluster point of .  The point is a cluster point of even though .  Every integer is an isolated point of .  In the set , the point is a cluster point, while each point is an isolated point.       A function is continuous at the isolated points of its domain.    Let be an isolated point of the domain of a function . Then there exists some such that . So whenever and , necessarily . Hence, which is less than any positive . This shows that is continuous at .    A cluster point is also called a limit point limit point . Here is why:    A real number is a cluster point of if and only if there is an injective sequence in that converges to .    First suppose that is a cluster point of . We construct an injective sequence in such that . Since is a cluster point, there exists such that . Now suppose that have been chosen in , all distinct, with for . Let Because is a cluster point of , there exists such that Then for , because . Thus, by induction, we obtain an injective sequence in with for every . Since , it follows that , and hence .  Conversely, suppose there is an injective sequence in such that . Let . Since , for all sufficiently large. In particular, the inequality is satisfied by infinitely many terms of the sequence. At most one of them can be by injectivity. Therefore, for some sufficiently large and so as well. This shows that every neighborhood of contains a point of other than . Therefore is a cluster point of .      Examples of Continuous Functions  The simplest examples of continuous functions are the constant functions and the identity function . We leave the justification of these statements as an exercise.    The absolute value function is continuous on .    Fix . By the reverse triangle inequality, Therefore, for any , if , then as well. Since is an arbitrary real number, this shows that the function is continuous on .      The reciprocal function is continuous on .    To prove the continuity of the function , we need, roughly speaking, to show that for any fixed , is small whenever is small. Thus, we need to make sure that the quantity , and hence , stays bounded away from when is close to . This can be achieved because if , then , and that guarantees . Thus, So for any , if we choose , then the inequality above implies , and we are done, since is arbitrary.      If the domain consists entirely of isolated points, then every function on that domain is continuous. For example, every function is continuous, because each integer is an isolated point of .    Later we will prove that sums, products, quotients (where the denominator is nonzero), and compositions of continuous functions are again continuous. From those general results it will follow that every polynomial is continuous on , every rational function is continuous on its domain, and standard functions such as , , , and are continuous on their natural domains.   "
},
{
  "id": "subsec-continuity-at-a-point-2",
  "level": "2",
  "url": "sec-definition-of-continuity-examples.html#subsec-continuity-at-a-point-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuous at "
},
{
  "id": "subsec-continuity-at-a-point-3",
  "level": "2",
  "url": "sec-definition-of-continuity-examples.html#subsec-continuity-at-a-point-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuous on continuous "
},
{
  "id": "subsec-cluster-and-isolated-points-2",
  "level": "2",
  "url": "sec-definition-of-continuity-examples.html#subsec-cluster-and-isolated-points-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "neighborhood "
},
{
  "id": "subsec-cluster-and-isolated-points-3",
  "level": "2",
  "url": "sec-definition-of-continuity-examples.html#subsec-cluster-and-isolated-points-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cluster point isolated point "
},
{
  "id": "eg-cluster-and-isolated-points",
  "level": "2",
  "url": "sec-definition-of-continuity-examples.html#eg-cluster-and-isolated-points",
  "type": "Example",
  "number": "4.1.1",
  "title": "",
  "body": "   Every point of an open interval is a cluster point of .  The point is a cluster point of even though .  Every integer is an isolated point of .  In the set , the point is a cluster point, while each point is an isolated point.    "
},
{
  "id": "prop-isolated-points-are-continuity-points",
  "level": "2",
  "url": "sec-definition-of-continuity-examples.html#prop-isolated-points-are-continuity-points",
  "type": "Proposition",
  "number": "4.1.2",
  "title": "",
  "body": "  A function is continuous at the isolated points of its domain.    Let be an isolated point of the domain of a function . Then there exists some such that . So whenever and , necessarily . Hence, which is less than any positive . This shows that is continuous at .   "
},
{
  "id": "subsec-cluster-and-isolated-points-6",
  "level": "2",
  "url": "sec-definition-of-continuity-examples.html#subsec-cluster-and-isolated-points-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "limit point "
},
{
  "id": "subsec-cluster-and-isolated-points-7",
  "level": "2",
  "url": "sec-definition-of-continuity-examples.html#subsec-cluster-and-isolated-points-7",
  "type": "Proposition",
  "number": "4.1.3",
  "title": "",
  "body": "  A real number is a cluster point of if and only if there is an injective sequence in that converges to .    First suppose that is a cluster point of . We construct an injective sequence in such that . Since is a cluster point, there exists such that . Now suppose that have been chosen in , all distinct, with for . Let Because is a cluster point of , there exists such that Then for , because . Thus, by induction, we obtain an injective sequence in with for every . Since , it follows that , and hence .  Conversely, suppose there is an injective sequence in such that . Let . Since , for all sufficiently large. In particular, the inequality is satisfied by infinitely many terms of the sequence. At most one of them can be by injectivity. Therefore, for some sufficiently large and so as well. This shows that every neighborhood of contains a point of other than . Therefore is a cluster point of .   "
},
{
  "id": "prop-absolute-value-continuous",
  "level": "2",
  "url": "sec-definition-of-continuity-examples.html#prop-absolute-value-continuous",
  "type": "Proposition",
  "number": "4.1.4",
  "title": "",
  "body": "  The absolute value function is continuous on .    Fix . By the reverse triangle inequality, Therefore, for any , if , then as well. Since is an arbitrary real number, this shows that the function is continuous on .   "
},
{
  "id": "prop-reciprocal-continuous",
  "level": "2",
  "url": "sec-definition-of-continuity-examples.html#prop-reciprocal-continuous",
  "type": "Proposition",
  "number": "4.1.5",
  "title": "",
  "body": "  The reciprocal function is continuous on .    To prove the continuity of the function , we need, roughly speaking, to show that for any fixed , is small whenever is small. Thus, we need to make sure that the quantity , and hence , stays bounded away from when is close to . This can be achieved because if , then , and that guarantees . Thus, So for any , if we choose , then the inequality above implies , and we are done, since is arbitrary.   "
},
{
  "id": "eg-continuous-functions-on-discrete-domains",
  "level": "2",
  "url": "sec-definition-of-continuity-examples.html#eg-continuous-functions-on-discrete-domains",
  "type": "Example",
  "number": "4.1.6",
  "title": "",
  "body": "  If the domain consists entirely of isolated points, then every function on that domain is continuous. For example, every function is continuous, because each integer is an isolated point of .   "
},
{
  "id": "sec-limits-and-continuity",
  "level": "1",
  "url": "sec-limits-and-continuity.html",
  "type": "Section",
  "number": "4.2",
  "title": "Limits and Continuity",
  "body": " Limits and Continuity   Limits at Cluster Points  Let , let be a function, and let be a cluster point of . We say that has limit limit of a function  at if for every there exists such that whenever and , we have   In that case we write or, equivalently, These two notations mean exactly the same thing. The second is read as “ tends to as tends to .”  The condition is essential: it says that we are only looking at points near but different from . Thus the existence of depends only on the values of arbitrarily close to , not on the value . In particular, need not even belong to the domain of .    Let on . Then . Indeed, if , then This example shows that a limit may exist even when is not defined at the limiting point.      If exists, then it is unique.    Suppose and are limits of at . We must show that . Let . By the definition of limit, there exist such that whenever and , for . Thus, for any with . By the definition of cluster point, such an exists. Since was arbitrary, it follows that . Therefore .    This proposition also explains why we only define when is a cluster point of the domain. If were an isolated point of , then for sufficiently small there would be no point with . The implication in the definition would then be automatically true for every real number , so the “limit” would not be unique.    Let and let . If we tried to define a limit of at using the usual punctured-neighborhood condition, then every would satisfy it, because there are no points with . So there is no meaningful notion of limit at that isolated point.      Left and Right Limits  Suppose is a cluster point of . We say that has left limit left limit  at if for every there exists such that whenever and , we have We write or .  Similarly, if is a cluster point of , we say that has right limit right limit  at if for every there exists such that whenever and , we have We write or .    Assume that is a cluster point of both and . Then if and only if     Suppose . Given , choose so that whenever and . If , then certainly , so . This proves . The proof for the right limit is the same.  Conversely, suppose both one-sided limits exist and are equal to . Given , choose so that whenever and , and also whenever and . Let . If and , then either or . In the first case , and in the second case . Hence in either case . Therefore .      Define Then and . Since these one-sided limits are different, does not exist.      Relation Between Limits and Continuity  The definition of limit ignores the value at the point , whereas continuity compares nearby values with . Because of this, limits and continuity are closely related but not identical.    Let and let . If is a cluster point of , then is continuous at if and only if     Suppose is continuous at . Let be given. By continuity, there exists such that whenever and . In particular, this holds whenever and . Hence .  Conversely, suppose . Let be given. Then there exists such that whenever and . Now if and , then either , in which case , or , in which case . Therefore is continuous at .      Define For , we have , so . However, , so is not continuous at . If we redefine the value at to be , then the resulting function becomes continuous at . This is the basic model of a removable discontinuity removable discontinuity .      Limits Involving  We now extend the definition of limit to cases where either the point approached or the limiting value is allowed to be or . The set is called the extended real line extended real line .  First suppose is a cluster point of . We write if for every there exists such that whenever and , we have . Similarly, we write if for every there exists such that whenever and , we have .  The one-sided definitions extend in exactly the same way. For example, means that for every there exists such that whenever and , we have . The other one-sided cases are analogous.  Next suppose that is unbounded above. We write for if for every there exists such that whenever and , we have . We write if for every there exists such that whenever and , we have . The definition of is analogous.  Likewise, if is unbounded below, we write for if for every there exists such that whenever and , we have . We define and similarly, by requiring to be eventually larger than any prescribed real number, or eventually smaller than any prescribed real number.  In each of these cases we also use the corresponding arrow notation: as , as , or as . The same uniqueness principle remains valid for these extended-real limits as well.     On , we have .  On , we have and .  On , we have .  On , we have .     It is often helpful to think of and as extra endpoints added to the real line. Then the definitions above are the natural analogues of ordinary limits at finite cluster points.   "
},
{
  "id": "subsec-limits-at-cluster-points-2",
  "level": "2",
  "url": "sec-limits-and-continuity.html#subsec-limits-at-cluster-points-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "limit "
},
{
  "id": "eg-limit-at-point-with-hole",
  "level": "2",
  "url": "sec-limits-and-continuity.html#eg-limit-at-point-with-hole",
  "type": "Example",
  "number": "4.2.1",
  "title": "",
  "body": "  Let on . Then . Indeed, if , then This example shows that a limit may exist even when is not defined at the limiting point.   "
},
{
  "id": "prop-limit-unique",
  "level": "2",
  "url": "sec-limits-and-continuity.html#prop-limit-unique",
  "type": "Proposition",
  "number": "4.2.2",
  "title": "",
  "body": "  If exists, then it is unique.    Suppose and are limits of at . We must show that . Let . By the definition of limit, there exist such that whenever and , for . Thus, for any with . By the definition of cluster point, such an exists. Since was arbitrary, it follows that . Therefore .   "
},
{
  "id": "eg-no-limit-at-isolated-point",
  "level": "2",
  "url": "sec-limits-and-continuity.html#eg-no-limit-at-isolated-point",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": "  Let and let . If we tried to define a limit of at using the usual punctured-neighborhood condition, then every would satisfy it, because there are no points with . So there is no meaningful notion of limit at that isolated point.   "
},
{
  "id": "subsec-one-sided-limits-2",
  "level": "2",
  "url": "sec-limits-and-continuity.html#subsec-one-sided-limits-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "left limit "
},
{
  "id": "subsec-one-sided-limits-3",
  "level": "2",
  "url": "sec-limits-and-continuity.html#subsec-one-sided-limits-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right limit "
},
{
  "id": "prop-two-sided-limit-iff-one-sided-limits",
  "level": "2",
  "url": "sec-limits-and-continuity.html#prop-two-sided-limit-iff-one-sided-limits",
  "type": "Proposition",
  "number": "4.2.4",
  "title": "",
  "body": "  Assume that is a cluster point of both and . Then if and only if     Suppose . Given , choose so that whenever and . If , then certainly , so . This proves . The proof for the right limit is the same.  Conversely, suppose both one-sided limits exist and are equal to . Given , choose so that whenever and , and also whenever and . Let . If and , then either or . In the first case , and in the second case . Hence in either case . Therefore .   "
},
{
  "id": "eg-sign-function-one-sided-limits",
  "level": "2",
  "url": "sec-limits-and-continuity.html#eg-sign-function-one-sided-limits",
  "type": "Example",
  "number": "4.2.5",
  "title": "",
  "body": "  Define Then and . Since these one-sided limits are different, does not exist.   "
},
{
  "id": "prop-continuity-iff-limit-equals-value",
  "level": "2",
  "url": "sec-limits-and-continuity.html#prop-continuity-iff-limit-equals-value",
  "type": "Proposition",
  "number": "4.2.6",
  "title": "",
  "body": "  Let and let . If is a cluster point of , then is continuous at if and only if     Suppose is continuous at . Let be given. By continuity, there exists such that whenever and . In particular, this holds whenever and . Hence .  Conversely, suppose . Let be given. Then there exists such that whenever and . Now if and , then either , in which case , or , in which case . Therefore is continuous at .   "
},
{
  "id": "eg-removable-discontinuity",
  "level": "2",
  "url": "sec-limits-and-continuity.html#eg-removable-discontinuity",
  "type": "Example",
  "number": "4.2.7",
  "title": "",
  "body": "  Define For , we have , so . However, , so is not continuous at . If we redefine the value at to be , then the resulting function becomes continuous at . This is the basic model of a removable discontinuity removable discontinuity .   "
},
{
  "id": "subsec-extended-real-limits-2",
  "level": "2",
  "url": "sec-limits-and-continuity.html#subsec-extended-real-limits-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "extended real line "
},
{
  "id": "eg-extended-real-limits",
  "level": "2",
  "url": "sec-limits-and-continuity.html#eg-extended-real-limits",
  "type": "Example",
  "number": "4.2.8",
  "title": "",
  "body": "   On , we have .  On , we have and .  On , we have .  On , we have .    "
},
{
  "id": "sec-basic-properties",
  "level": "1",
  "url": "sec-basic-properties.html",
  "type": "Section",
  "number": "4.3",
  "title": "Basic Properties",
  "body": " Basic Properties   The definition of continuity is local and quantitative, but in practice it is often convenient to test continuity using sequences. Once that criterion is available, several basic permanence properties follow immediately: sums, products, quotients, and compositions of continuous functions are again continuous. These results will let us build large classes of examples from a small stock of simple continuous functions.    Sequential Characterization  The following criterion replaces the - definition with a statement about images of convergent sequences. It is often the most efficient way to prove that a function is continuous.    Let , let , and let . Then is continuous at if and only if for every sequence in with , we have     First suppose that is continuous at , and let be a sequence in such that . Let be given. By continuity at , there exists such that whenever and . Since , for all but finitely many . Hence for all but finitely many , so .  Conversely, assume for every sequence in that converges to but is not continuous at . Then there exists such that for every there exists with and Clearly, , but does not converge to , contradicting the hypothesis. Therefore must be continuous at .    We will use this sequential characterization of continuity sequential characterization of continuity repeatedly. Once continuity is translated into a statement about convergent sequences, the usual algebraic properties of limits give the corresponding algebraic properties of continuous functions.    Algebra of Continuous Functions    Let be continuous at , then so are and . Moreover, if , then and hence are also continuous at .    Pick a sequence in that converges to . Since and are continuous at , the sequential characterization gives Therefore implies that and Hence and are continuous at .  Now assume . Since , we have for all sufficiently large . Thus, by dropping finitely many terms if necessary, we may assume for all . Then the reciprocal part of gives Thus is continuous at by the sequential characterization of continuity. Applying the product result to and , we conclude that is continuous at .      Let , let , and let . If is continuous at and is continuous at , then the composition is continuous at .    Let be a sequence in with . Since is continuous at , we have . The sequence lies in , and because is continuous at , it follows that Therefore is continuous at .      Every polynomial is continuous on , and every rational function is continuous on its domain.    Constant functions and the identity function are continuous. By repeated application of the preceding proposition, finite sums and products of continuous functions are continuous, so every polynomial is continuous on . A rational function is a quotient of two polynomials, and the quotient part of the same proposition shows that is continuous at every point where .      Some Consequences  Continuity does more than preserve limits under algebraic operations. It also imposes rigidity: a continuous function is determined by its values on a dense subset, and a nonzero value at one point forces the function to keep the same sign nearby.    Let , let be dense in , and let be continuous on . If for every , then for every .    Fix . Since is dense in , for each we may choose such that . Then . Because is continuous at , the sequential characterization gives . But every lies in , so for all . Hence the constant sequence converges to , and therefore . Since was arbitrary, on .      Let and let be dense in . If are continuous on and for every , then on .    The function is continuous on and vanishes on . By the proposition, on . Therefore on .      Let , let , and let . If is continuous at and , then there exists such that has the same sign as whenever and .    Let . Since is continuous at , there exists such that whenever and . If , then If , then In either case, has the same sign as .     "
},
{
  "id": "prop-sequential-characterization-of-continuity",
  "level": "2",
  "url": "sec-basic-properties.html#prop-sequential-characterization-of-continuity",
  "type": "Proposition",
  "number": "4.3.1",
  "title": "",
  "body": "  Let , let , and let . Then is continuous at if and only if for every sequence in with , we have     First suppose that is continuous at , and let be a sequence in such that . Let be given. By continuity at , there exists such that whenever and . Since , for all but finitely many . Hence for all but finitely many , so .  Conversely, assume for every sequence in that converges to but is not continuous at . Then there exists such that for every there exists with and Clearly, , but does not converge to , contradicting the hypothesis. Therefore must be continuous at .   "
},
{
  "id": "subsec-sequential-characterization-of-continuity-4",
  "level": "2",
  "url": "sec-basic-properties.html#subsec-sequential-characterization-of-continuity-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sequential characterization of continuity "
},
{
  "id": "prop-algebra-of-continuous-functions",
  "level": "2",
  "url": "sec-basic-properties.html#prop-algebra-of-continuous-functions",
  "type": "Proposition",
  "number": "4.3.2",
  "title": "",
  "body": "  Let be continuous at , then so are and . Moreover, if , then and hence are also continuous at .    Pick a sequence in that converges to . Since and are continuous at , the sequential characterization gives Therefore implies that and Hence and are continuous at .  Now assume . Since , we have for all sufficiently large . Thus, by dropping finitely many terms if necessary, we may assume for all . Then the reciprocal part of gives Thus is continuous at by the sequential characterization of continuity. Applying the product result to and , we conclude that is continuous at .   "
},
{
  "id": "prop-composition-preserves-continuity",
  "level": "2",
  "url": "sec-basic-properties.html#prop-composition-preserves-continuity",
  "type": "Proposition",
  "number": "4.3.3",
  "title": "",
  "body": "  Let , let , and let . If is continuous at and is continuous at , then the composition is continuous at .    Let be a sequence in with . Since is continuous at , we have . The sequence lies in , and because is continuous at , it follows that Therefore is continuous at .   "
},
{
  "id": "cor-polynomials-and-rational-functions-continuous",
  "level": "2",
  "url": "sec-basic-properties.html#cor-polynomials-and-rational-functions-continuous",
  "type": "Corollary",
  "number": "4.3.4",
  "title": "",
  "body": "  Every polynomial is continuous on , and every rational function is continuous on its domain.    Constant functions and the identity function are continuous. By repeated application of the preceding proposition, finite sums and products of continuous functions are continuous, so every polynomial is continuous on . A rational function is a quotient of two polynomials, and the quotient part of the same proposition shows that is continuous at every point where .   "
},
{
  "id": "prop-continuous-zero-on-dense-subset",
  "level": "2",
  "url": "sec-basic-properties.html#prop-continuous-zero-on-dense-subset",
  "type": "Proposition",
  "number": "4.3.5",
  "title": "",
  "body": "  Let , let be dense in , and let be continuous on . If for every , then for every .    Fix . Since is dense in , for each we may choose such that . Then . Because is continuous at , the sequential characterization gives . But every lies in , so for all . Hence the constant sequence converges to , and therefore . Since was arbitrary, on .   "
},
{
  "id": "cor-continuous-functions-agree-on-dense-subset",
  "level": "2",
  "url": "sec-basic-properties.html#cor-continuous-functions-agree-on-dense-subset",
  "type": "Corollary",
  "number": "4.3.6",
  "title": "",
  "body": "  Let and let be dense in . If are continuous on and for every , then on .    The function is continuous on and vanishes on . By the proposition, on . Therefore on .   "
},
{
  "id": "prop-sign-preserved-near-nonzero-point",
  "level": "2",
  "url": "sec-basic-properties.html#prop-sign-preserved-near-nonzero-point",
  "type": "Proposition",
  "number": "4.3.7",
  "title": "",
  "body": "  Let , let , and let . If is continuous at and , then there exists such that has the same sign as whenever and .    Let . Since is continuous at , there exists such that whenever and . If , then If , then In either case, has the same sign as .   "
},
{
  "id": "sec-continuous-functions-on-intervals",
  "level": "1",
  "url": "sec-continuous-functions-on-intervals.html",
  "type": "Section",
  "number": "4.4",
  "title": "Continuous Functions on Intervals",
  "body": " Continuous Functions on Intervals   The basic properties from the previous section show that continuity is preserved under many algebraic operations. When the domain is an interval, continuity also has strong global consequences. On a closed and bounded interval, a continuous function must stay bounded and must attain its largest and smallest values. On any interval, a continuous function cannot jump over intermediate values. These results are among the first indications that continuity is not merely a local condition.    Extreme Value Theorem  Let and let . We say that attains an absolute maximum absolute maximum on at if for every . Likewise, attains an absolute minimum absolute minimum on at if for every . A function need not attain either one on an arbitrary domain, even if it is continuous. Closed and bounded intervals are special because limits of sequences in such intervals cannot escape the interval.    Every cluster point of a closed interval belongs to .    For any , let . Then , which is disjoint from . So is not a cluster point of . The case is similar, using . Therefore every cluster point of must lie in .      Every continuous function on a closed bounded interval is bounded.    Let be continuous. Suppose is not bounded. Then for every there exists such that Since is bounded, gives a convergent subsequence . Let . By , . Since is continuous at , gives . Hence is convergent, so it is bounded. But for every , which is impossible. Therefore is bounded.      Both hypotheses in are necessary.   The function on is continuous, but it is not bounded because as .  The function is defined on the closed bounded interval , but it is not continuous at and it is not bounded.      Extreme Value Theorem   A continuous function on a closed bounded interval attains an absolute maximum and an absolute minimum.    Let be continuous on a closed bounded interval . Then is nonempty and, by , is also bounded. So exists. By , there is a sequence in that converges to . For each , pick with .  Since is bounded, the Bolzano-Weierstrass theorem yields a convergent subsequence of . Again implies the limit of this subsequence, say , belongs to . Consequently, is continuous at and according to the sequential characterization of continuity . As a subsequence of , must converge to as well. So by uniqueness of limits . Thus, attains its absolute maximum.  Applying the same argument to , we see that attains its absolute maximum at some point . Then is the absolute minimum of on .      The conclusion of the extreme value theorem can fail if the interval is not closed. The identity function on is continuous and bounded, but it has neither an absolute maximum nor an absolute minimum on .   The graph of on has open endpoints, so the values and are approached but never attained.   The line y equals x on the open interval from zero to one, with open circles at both endpoints.         Intermediate Value Theorem  The extreme value theorem says that a continuous function on cannot avoid its largest and smallest values. The next theorem says more: between any two values it takes, it must also take every intermediate value. Geometrically, the graph of a continuous function on an interval cannot jump across a horizontal line.   Bolzano's Theorem   Let be continuous. If and are of opposite signs, then there exists such that .    After replacing by if necessary, we may assume . Let Then , and is an upper bound of . So exists. Since , we have .  We claim that . Suppose first that . Then , since . Choose a sequence in such that . By continuity of at , we have . Hence for all sufficiently large . For such , we have and , contradicting the fact that is an upper bound of .  Now suppose that . Then . For each , let . Then , so is not an upper bound of . Therefore there exists such that . Since and for every , the squeeze lemma gives . By continuity, , so for all sufficiently large . But each , so for every , a contradiction.  Therefore . Since and , we have and . Hence .     Intermediate Value Theorem   Let be continuous, and let be a real number between and . Then there exists such that     Consider the function . Then is continuous on . If or , then we are done. Otherwise lies strictly between and , so and have opposite signs. Hence gives a point such that . Therefore .      The equation has a solution in . Indeed, the polynomial is continuous, while and . By , there exists such that .      Continuity is essential in the intermediate value theorem. Define Then and , but there is no with .   A jump discontinuity can skip intermediate values.   The sign function equals negative one to the left of zero and positive one at and to the right of zero, so the graph jumps over zero.         The image of an interval under a continuous function is an interval.    Let be an interval, and let be continuous. To show that is an interval, let with , and let satisfy . Choose such that and . Since is an interval, the closed interval between and is contained in . Applying to the restriction of to that closed interval, we obtain such that . Thus , so is an interval.      The image of a closed bounded interval under a continuous function is a closed bounded interval.    Let be continuous. By , is an interval. By , attains its absolute minimum and absolute maximum on . Hence . Since is an interval containing and , it also contains every number between them. Therefore , and so     The last corollary is a first glimpse of a more general theorem from topology: continuous images of compact sets are compact. For subsets of , compactness is the same as being closed and bounded, so the corollary above is exactly the one-dimensional case of that general principle.    If is injective and continuous on an interval , then the inverse of is also continuous.    Clearly, we can assume is non-degenerated (i.e. has at least two points). Let be the inverse of . We argue that is continuous at an arbitrary point . Let be a sequence in that converges to . Set and . We must show that .  Suppose, to the contrary, that does not converge to . Then there exists such that infinitely many terms of the sequence lie outside the interval . Passing to a subsequence, we may assume that for every . Since is a point of a non-degenerated interval, it is a cluster point of , and hence is also non-degenerated. By , is an interval containing ; it is also non-degenerated because is injective. Therefore there exists such that But and , so for every . On the other hand, since and each lies in , we have for all sufficiently large , a contradiction.     "
},
{
  "id": "subsec-extreme-value-theorem-2",
  "level": "2",
  "url": "sec-continuous-functions-on-intervals.html#subsec-extreme-value-theorem-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "absolute maximum absolute minimum "
},
{
  "id": "prop-closed-interval-contains-cluster-points",
  "level": "2",
  "url": "sec-continuous-functions-on-intervals.html#prop-closed-interval-contains-cluster-points",
  "type": "Proposition",
  "number": "4.4.1",
  "title": "",
  "body": "  Every cluster point of a closed interval belongs to .    For any , let . Then , which is disjoint from . So is not a cluster point of . The case is similar, using . Therefore every cluster point of must lie in .   "
},
{
  "id": "prop-continuous-on-closed-bounded-interval-bounded",
  "level": "2",
  "url": "sec-continuous-functions-on-intervals.html#prop-continuous-on-closed-bounded-interval-bounded",
  "type": "Proposition",
  "number": "4.4.2",
  "title": "",
  "body": "  Every continuous function on a closed bounded interval is bounded.    Let be continuous. Suppose is not bounded. Then for every there exists such that Since is bounded, gives a convergent subsequence . Let . By , . Since is continuous at , gives . Hence is convergent, so it is bounded. But for every , which is impossible. Therefore is bounded.   "
},
{
  "id": "eg-boundedness-hypotheses-necessary",
  "level": "2",
  "url": "sec-continuous-functions-on-intervals.html#eg-boundedness-hypotheses-necessary",
  "type": "Example",
  "number": "4.4.3",
  "title": "",
  "body": "  Both hypotheses in are necessary.   The function on is continuous, but it is not bounded because as .  The function is defined on the closed bounded interval , but it is not continuous at and it is not bounded.    "
},
{
  "id": "thm-extreme-value-theorem",
  "level": "2",
  "url": "sec-continuous-functions-on-intervals.html#thm-extreme-value-theorem",
  "type": "Theorem",
  "number": "4.4.4",
  "title": "Extreme Value Theorem.",
  "body": " Extreme Value Theorem   A continuous function on a closed bounded interval attains an absolute maximum and an absolute minimum.    Let be continuous on a closed bounded interval . Then is nonempty and, by , is also bounded. So exists. By , there is a sequence in that converges to . For each , pick with .  Since is bounded, the Bolzano-Weierstrass theorem yields a convergent subsequence of . Again implies the limit of this subsequence, say , belongs to . Consequently, is continuous at and according to the sequential characterization of continuity . As a subsequence of , must converge to as well. So by uniqueness of limits . Thus, attains its absolute maximum.  Applying the same argument to , we see that attains its absolute maximum at some point . Then is the absolute minimum of on .   "
},
{
  "id": "eg-open-interval-no-extrema",
  "level": "2",
  "url": "sec-continuous-functions-on-intervals.html#eg-open-interval-no-extrema",
  "type": "Example",
  "number": "4.4.5",
  "title": "",
  "body": "  The conclusion of the extreme value theorem can fail if the interval is not closed. The identity function on is continuous and bounded, but it has neither an absolute maximum nor an absolute minimum on .   The graph of on has open endpoints, so the values and are approached but never attained.   The line y equals x on the open interval from zero to one, with open circles at both endpoints.      "
},
{
  "id": "prop-bolzano-zero",
  "level": "2",
  "url": "sec-continuous-functions-on-intervals.html#prop-bolzano-zero",
  "type": "Proposition",
  "number": "4.4.7",
  "title": "Bolzano’s Theorem.",
  "body": " Bolzano's Theorem   Let be continuous. If and are of opposite signs, then there exists such that .    After replacing by if necessary, we may assume . Let Then , and is an upper bound of . So exists. Since , we have .  We claim that . Suppose first that . Then , since . Choose a sequence in such that . By continuity of at , we have . Hence for all sufficiently large . For such , we have and , contradicting the fact that is an upper bound of .  Now suppose that . Then . For each , let . Then , so is not an upper bound of . Therefore there exists such that . Since and for every , the squeeze lemma gives . By continuity, , so for all sufficiently large . But each , so for every , a contradiction.  Therefore . Since and , we have and . Hence .   "
},
{
  "id": "thm-intermediate-value-theorem",
  "level": "2",
  "url": "sec-continuous-functions-on-intervals.html#thm-intermediate-value-theorem",
  "type": "Theorem",
  "number": "4.4.8",
  "title": "Intermediate Value Theorem.",
  "body": " Intermediate Value Theorem   Let be continuous, and let be a real number between and . Then there exists such that     Consider the function . Then is continuous on . If or , then we are done. Otherwise lies strictly between and , so and have opposite signs. Hence gives a point such that . Therefore .   "
},
{
  "id": "eg-ivt-equation-root",
  "level": "2",
  "url": "sec-continuous-functions-on-intervals.html#eg-ivt-equation-root",
  "type": "Example",
  "number": "4.4.9",
  "title": "",
  "body": "  The equation has a solution in . Indeed, the polynomial is continuous, while and . By , there exists such that .   "
},
{
  "id": "eg-ivt-needs-continuity",
  "level": "2",
  "url": "sec-continuous-functions-on-intervals.html#eg-ivt-needs-continuity",
  "type": "Example",
  "number": "4.4.10",
  "title": "",
  "body": "  Continuity is essential in the intermediate value theorem. Define Then and , but there is no with .   A jump discontinuity can skip intermediate values.   The sign function equals negative one to the left of zero and positive one at and to the right of zero, so the graph jumps over zero.      "
},
{
  "id": "cor-continuous-image-of-interval-is-interval",
  "level": "2",
  "url": "sec-continuous-functions-on-intervals.html#cor-continuous-image-of-interval-is-interval",
  "type": "Corollary",
  "number": "4.4.12",
  "title": "",
  "body": "  The image of an interval under a continuous function is an interval.    Let be an interval, and let be continuous. To show that is an interval, let with , and let satisfy . Choose such that and . Since is an interval, the closed interval between and is contained in . Applying to the restriction of to that closed interval, we obtain such that . Thus , so is an interval.   "
},
{
  "id": "cor-continuous-image-of-closed-bounded-interval",
  "level": "2",
  "url": "sec-continuous-functions-on-intervals.html#cor-continuous-image-of-closed-bounded-interval",
  "type": "Corollary",
  "number": "4.4.13",
  "title": "",
  "body": "  The image of a closed bounded interval under a continuous function is a closed bounded interval.    Let be continuous. By , is an interval. By , attains its absolute minimum and absolute maximum on . Hence . Since is an interval containing and , it also contains every number between them. Therefore , and so    "
},
{
  "id": "prop-injective-continuous-on-interval-has-continuous-inverse",
  "level": "2",
  "url": "sec-continuous-functions-on-intervals.html#prop-injective-continuous-on-interval-has-continuous-inverse",
  "type": "Proposition",
  "number": "4.4.14",
  "title": "",
  "body": "  If is injective and continuous on an interval , then the inverse of is also continuous.    Clearly, we can assume is non-degenerated (i.e. has at least two points). Let be the inverse of . We argue that is continuous at an arbitrary point . Let be a sequence in that converges to . Set and . We must show that .  Suppose, to the contrary, that does not converge to . Then there exists such that infinitely many terms of the sequence lie outside the interval . Passing to a subsequence, we may assume that for every . Since is a point of a non-degenerated interval, it is a cluster point of , and hence is also non-degenerated. By , is an interval containing ; it is also non-degenerated because is injective. Therefore there exists such that But and , so for every . On the other hand, since and each lies in , we have for all sufficiently large , a contradiction.   "
},
{
  "id": "sec-uniform-continuity",
  "level": "1",
  "url": "sec-uniform-continuity.html",
  "type": "Section",
  "number": "4.5",
  "title": "Uniform Continuity",
  "body": " Uniform Continuity   The extreme value theorem and the intermediate value theorem show that a continuous function on an interval has strong global consequences. There is another global strengthening of continuity that will be useful later: a single choice of can control the oscillation of the function at every point of the domain at once. This is the idea of uniform continuity uniform continuity .    Definition and First Examples  Let and let . We say that is uniformly continuous on if for every there exists such that whenever and .  The crucial difference from ordinary continuity is that depends only on , not on a base point . Thus one estimate works simultaneously for all points of the domain.    If is uniformly continuous on , then is continuous at every point of .    Fix and let . Choose from uniform continuity. If and , then applying the definition with and gives . Therefore is continuous at .      The function on is continuous but not uniformly continuous. To see this, take . Suppose there were some such that whenever and . Choose so large that , and let Then and but contradicting the definition of uniform continuity.      Closed Bounded Intervals  The same hypotheses that guarantee the extreme value theorem also force uniform continuity.    Every continuous function on a closed bounded interval is uniformly continuous.    Let be continuous. Suppose that is not uniformly continuous. Then there exists such that for every we can find with   The sequence lies in the bounded interval , so by the it has a convergent subsequence . Let . Since contains all its cluster points , .  As a subsequence of the null sequence , is also null. Thus, converges to as well. Since is continuous at , gives Therefore, is null which contradicts for every . This contradiction shows that is uniformly continuous.      Cauchy Sequences and Extension to Endpoints  Uniform continuity is closely tied to the material from the chapter on sequences. Ordinary continuity carries convergent sequences to convergent sequences ( ). Uniform continuity does something stronger: it preserves the Cauchy property itself.    If is uniformly continuous on and is a Cauchy sequence in , then is a Cauchy sequence in .    Let . Choose from the definition of uniform continuity. Since is Cauchy, there exists such that whenever . Therefore, for , Hence is Cauchy.      Let . Then is uniformly continuous on if and only if extends to a continuous function on .    First suppose that extends to a continuous function . By , is uniformly continuous on . Its restriction to is therefore uniformly continuous as well, so is uniformly continuous on .  Conversely, suppose that is uniformly continuous on . Let be any sequence in with . By , is Cauchy, so shows that is Cauchy. By , converges.  This limit is independent of the sequence approaching . To see this, let and be sequences in with and , and define a new sequence by Then , so the argument above shows that converges. Since and are subsequences of the convergent sequence , implies that they converge to the same limit. Denote this common limit by . In the same way, there is a uniquely determined real number such that whenever with .  Define by On , the function agrees with , so it is continuous there by .  It remains to prove continuity at the endpoints. We do this at ; the proof at is identical. Let be a sequence in with . If all but finitely many terms satisfy , then clearly . Otherwise, the subsequence consisting of those terms with still converges to . By the definition of , the image of that subsequence under converges to , while every term with is mapped exactly to . Hence the whole sequence converges to . By the sequential characterization of continuity, is continuous at .      Lipschitz Continuity and Gluing Intervals  A useful sufficient condition for uniform continuity is a linear bound on how fast the function can change.  Let . A function is Lipschitz continuous Lipschitz continuity on if there exists such that for all .    Every Lipschitz continuous function is uniformly continuous.    Suppose for all . Given , choose . Then whenever satisfy , we have Thus is uniformly continuous.      The function is Lipschitz continuous on . Indeed, for , so Therefore is uniformly continuous on .      Let and be intervals with . If is uniformly continuous on both and , then is uniformly continuous on .    Let . Since is uniformly continuous on each interval, there exist such that whenever and ( ). Let .  Take with . If both points lie in the same interval, then . So assume that and . Choose .  The point must lie between and . For if, say, lay between and , then since and is an interval, we would also have , a contradiction. Thus so both are strictly less than .  Since and , we obtain The triangle inequality then gives Therefore is uniformly continuous on .      The function is uniformly continuous on . By , the function is uniformly continuous on . By , it is uniformly continuous on . Since these intervals overlap, implies that is uniformly continuous on their union .     "
},
{
  "id": "sec-uniform-continuity-2-1",
  "level": "2",
  "url": "sec-uniform-continuity.html#sec-uniform-continuity-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "uniform continuity "
},
{
  "id": "prop-uniform-continuity-implies-continuity",
  "level": "2",
  "url": "sec-uniform-continuity.html#prop-uniform-continuity-implies-continuity",
  "type": "Proposition",
  "number": "4.5.1",
  "title": "",
  "body": "  If is uniformly continuous on , then is continuous at every point of .    Fix and let . Choose from uniform continuity. If and , then applying the definition with and gives . Therefore is continuous at .   "
},
{
  "id": "eg-one-over-x-not-uniformly-continuous",
  "level": "2",
  "url": "sec-uniform-continuity.html#eg-one-over-x-not-uniformly-continuous",
  "type": "Example",
  "number": "4.5.2",
  "title": "",
  "body": "  The function on is continuous but not uniformly continuous. To see this, take . Suppose there were some such that whenever and . Choose so large that , and let Then and but contradicting the definition of uniform continuity.   "
},
{
  "id": "thm-continuous-on-closed-bounded-interval-uniformly-continuous",
  "level": "2",
  "url": "sec-uniform-continuity.html#thm-continuous-on-closed-bounded-interval-uniformly-continuous",
  "type": "Theorem",
  "number": "4.5.3",
  "title": "",
  "body": "  Every continuous function on a closed bounded interval is uniformly continuous.    Let be continuous. Suppose that is not uniformly continuous. Then there exists such that for every we can find with   The sequence lies in the bounded interval , so by the it has a convergent subsequence . Let . Since contains all its cluster points , .  As a subsequence of the null sequence , is also null. Thus, converges to as well. Since is continuous at , gives Therefore, is null which contradicts for every . This contradiction shows that is uniformly continuous.   "
},
{
  "id": "prop-uniform-continuity-preserves-cauchy",
  "level": "2",
  "url": "sec-uniform-continuity.html#prop-uniform-continuity-preserves-cauchy",
  "type": "Proposition",
  "number": "4.5.4",
  "title": "",
  "body": "  If is uniformly continuous on and is a Cauchy sequence in , then is a Cauchy sequence in .    Let . Choose from the definition of uniform continuity. Since is Cauchy, there exists such that whenever . Therefore, for , Hence is Cauchy.   "
},
{
  "id": "prop-uniform-continuity-extension-open-interval",
  "level": "2",
  "url": "sec-uniform-continuity.html#prop-uniform-continuity-extension-open-interval",
  "type": "Proposition",
  "number": "4.5.5",
  "title": "",
  "body": "  Let . Then is uniformly continuous on if and only if extends to a continuous function on .    First suppose that extends to a continuous function . By , is uniformly continuous on . Its restriction to is therefore uniformly continuous as well, so is uniformly continuous on .  Conversely, suppose that is uniformly continuous on . Let be any sequence in with . By , is Cauchy, so shows that is Cauchy. By , converges.  This limit is independent of the sequence approaching . To see this, let and be sequences in with and , and define a new sequence by Then , so the argument above shows that converges. Since and are subsequences of the convergent sequence , implies that they converge to the same limit. Denote this common limit by . In the same way, there is a uniquely determined real number such that whenever with .  Define by On , the function agrees with , so it is continuous there by .  It remains to prove continuity at the endpoints. We do this at ; the proof at is identical. Let be a sequence in with . If all but finitely many terms satisfy , then clearly . Otherwise, the subsequence consisting of those terms with still converges to . By the definition of , the image of that subsequence under converges to , while every term with is mapped exactly to . Hence the whole sequence converges to . By the sequential characterization of continuity, is continuous at .   "
},
{
  "id": "subsec-lipschitz-and-gluing-3",
  "level": "2",
  "url": "sec-uniform-continuity.html#subsec-lipschitz-and-gluing-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lipschitz continuous "
},
{
  "id": "prop-lipschitz-implies-uniformly-continuous",
  "level": "2",
  "url": "sec-uniform-continuity.html#prop-lipschitz-implies-uniformly-continuous",
  "type": "Proposition",
  "number": "4.5.6",
  "title": "",
  "body": "  Every Lipschitz continuous function is uniformly continuous.    Suppose for all . Given , choose . Then whenever satisfy , we have Thus is uniformly continuous.   "
},
{
  "id": "eg-sqrt-lipschitz-on-one-infty",
  "level": "2",
  "url": "sec-uniform-continuity.html#eg-sqrt-lipschitz-on-one-infty",
  "type": "Example",
  "number": "4.5.7",
  "title": "",
  "body": "  The function is Lipschitz continuous on . Indeed, for , so Therefore is uniformly continuous on .   "
},
{
  "id": "prop-uniform-continuity-on-overlapping-intervals",
  "level": "2",
  "url": "sec-uniform-continuity.html#prop-uniform-continuity-on-overlapping-intervals",
  "type": "Proposition",
  "number": "4.5.8",
  "title": "",
  "body": "  Let and be intervals with . If is uniformly continuous on both and , then is uniformly continuous on .    Let . Since is uniformly continuous on each interval, there exist such that whenever and ( ). Let .  Take with . If both points lie in the same interval, then . So assume that and . Choose .  The point must lie between and . For if, say, lay between and , then since and is an interval, we would also have , a contradiction. Thus so both are strictly less than .  Since and , we obtain The triangle inequality then gives Therefore is uniformly continuous on .   "
},
{
  "id": "eg-sqrt-uniformly-continuous-on-halfline",
  "level": "2",
  "url": "sec-uniform-continuity.html#eg-sqrt-uniformly-continuous-on-halfline",
  "type": "Example",
  "number": "4.5.9",
  "title": "",
  "body": "  The function is uniformly continuous on . By , the function is uniformly continuous on . By , it is uniformly continuous on . Since these intervals overlap, implies that is uniformly continuous on their union .   "
},
{
  "id": "ex-ch4",
  "level": "1",
  "url": "ex-ch4.html",
  "type": "Exercises",
  "number": "4.6",
  "title": "Exercises",
  "body": " Exercises    Prove that every constant function and the identity function are continuous on .      Prove that every function is continuous.      Let Determine all cluster points of and all isolated points of .      Let and . Prove that is a cluster point of if and only if there exists a sequence in such that .      Prove directly from the - definition that is continuous on .  Hint: for fixed , write and choose .      Prove directly from the definitions that       Define Compute and . Does exist? Is continuous at ?      Define Find . Is continuous at ? How should be redefined to make continuous at ?      Let and let be continuous. Prove that is continuous.      Let , and let be continuous. Suppose that for every . Prove that on .      Let , let , and let . Assume that is continuous at and . Prove that there exists such that for every with .      Give examples showing that each hypothesis of the Extreme Value Theorem is necessary.   A continuous function on a bounded interval that does not attain an absolute maximum or an absolute minimum.  A continuous function on a closed interval that is not bounded above.  A function on a closed bounded interval that is not continuous and does not attain an absolute maximum or an absolute minimum.       Use the Intermediate Value Theorem to prove that the equation has a solution in .      Let be an interval, and let be continuous. Prove that is an interval.      Prove that every odd degree polynomial with real coefficients has a real root.  Hint: compare the dominant term for large positive and negative values of , then apply the Intermediate Value Theorem.      Prove that is not uniformly continuous on .  Hint: compare the values of at and .      Show that is not uniformly continuous on .  Hint: use .    "
},
{
  "id": "ex-continuity-constant-and-identity",
  "level": "2",
  "url": "ex-ch4.html#ex-continuity-constant-and-identity",
  "type": "Exercise",
  "number": "4.6.1",
  "title": "",
  "body": "  Prove that every constant function and the identity function are continuous on .   "
},
{
  "id": "ex-continuity-functions-on-z",
  "level": "2",
  "url": "ex-ch4.html#ex-continuity-functions-on-z",
  "type": "Exercise",
  "number": "4.6.2",
  "title": "",
  "body": "  Prove that every function is continuous.   "
},
{
  "id": "ex-continuity-cluster-isolated-points-example",
  "level": "2",
  "url": "ex-ch4.html#ex-continuity-cluster-isolated-points-example",
  "type": "Exercise",
  "number": "4.6.3",
  "title": "",
  "body": "  Let Determine all cluster points of and all isolated points of .   "
},
{
  "id": "ex-continuity-cluster-point-sequential-characterization",
  "level": "2",
  "url": "ex-ch4.html#ex-continuity-cluster-point-sequential-characterization",
  "type": "Exercise",
  "number": "4.6.4",
  "title": "",
  "body": "  Let and . Prove that is a cluster point of if and only if there exists a sequence in such that .   "
},
{
  "id": "ex-continuity-direct-proof-square",
  "level": "2",
  "url": "ex-ch4.html#ex-continuity-direct-proof-square",
  "type": "Exercise",
  "number": "4.6.5",
  "title": "",
  "body": "  Prove directly from the - definition that is continuous on .  Hint: for fixed , write and choose .   "
},
{
  "id": "ex-continuity-direct-proof-extended-limits",
  "level": "2",
  "url": "ex-ch4.html#ex-continuity-direct-proof-extended-limits",
  "type": "Exercise",
  "number": "4.6.6",
  "title": "",
  "body": "  Prove directly from the definitions that    "
},
{
  "id": "ex-continuity-piecewise-one-sided-limits",
  "level": "2",
  "url": "ex-ch4.html#ex-continuity-piecewise-one-sided-limits",
  "type": "Exercise",
  "number": "4.6.7",
  "title": "",
  "body": "  Define Compute and . Does exist? Is continuous at ?   "
},
{
  "id": "ex-continuity-removable-discontinuity-example",
  "level": "2",
  "url": "ex-ch4.html#ex-continuity-removable-discontinuity-example",
  "type": "Exercise",
  "number": "4.6.8",
  "title": "",
  "body": "  Define Find . Is continuous at ? How should be redefined to make continuous at ?   "
},
{
  "id": "ex-continuity-absolute-value-of-continuous-function",
  "level": "2",
  "url": "ex-ch4.html#ex-continuity-absolute-value-of-continuous-function",
  "type": "Exercise",
  "number": "4.6.9",
  "title": "",
  "body": "  Let and let be continuous. Prove that is continuous.   "
},
{
  "id": "ex-continuity-agree-on-rationals",
  "level": "2",
  "url": "ex-ch4.html#ex-continuity-agree-on-rationals",
  "type": "Exercise",
  "number": "4.6.10",
  "title": "",
  "body": "  Let , and let be continuous. Suppose that for every . Prove that on .   "
},
{
  "id": "ex-continuity-positive-near-positive-point",
  "level": "2",
  "url": "ex-ch4.html#ex-continuity-positive-near-positive-point",
  "type": "Exercise",
  "number": "4.6.11",
  "title": "",
  "body": "  Let , let , and let . Assume that is continuous at and . Prove that there exists such that for every with .   "
},
{
  "id": "ex-continuity-evt-hypotheses-necessary",
  "level": "2",
  "url": "ex-ch4.html#ex-continuity-evt-hypotheses-necessary",
  "type": "Exercise",
  "number": "4.6.12",
  "title": "",
  "body": "  Give examples showing that each hypothesis of the Extreme Value Theorem is necessary.   A continuous function on a bounded interval that does not attain an absolute maximum or an absolute minimum.  A continuous function on a closed interval that is not bounded above.  A function on a closed bounded interval that is not continuous and does not attain an absolute maximum or an absolute minimum.    "
},
{
  "id": "ex-continuity-ivt-cosx-fixed-point",
  "level": "2",
  "url": "ex-ch4.html#ex-continuity-ivt-cosx-fixed-point",
  "type": "Exercise",
  "number": "4.6.13",
  "title": "",
  "body": "  Use the Intermediate Value Theorem to prove that the equation has a solution in .   "
},
{
  "id": "ex-continuity-image-of-interval-is-interval",
  "level": "2",
  "url": "ex-ch4.html#ex-continuity-image-of-interval-is-interval",
  "type": "Exercise",
  "number": "4.6.14",
  "title": "",
  "body": "  Let be an interval, and let be continuous. Prove that is an interval.   "
},
{
  "id": "ex-continuity-odd-polynomial-root",
  "level": "2",
  "url": "ex-ch4.html#ex-continuity-odd-polynomial-root",
  "type": "Exercise",
  "number": "4.6.15",
  "title": "",
  "body": "  Prove that every odd degree polynomial with real coefficients has a real root.  Hint: compare the dominant term for large positive and negative values of , then apply the Intermediate Value Theorem.   "
},
{
  "id": "ex-continuity-x-squared-not-uniformly-continuous",
  "level": "2",
  "url": "ex-ch4.html#ex-continuity-x-squared-not-uniformly-continuous",
  "type": "Exercise",
  "number": "4.6.16",
  "title": "",
  "body": "  Prove that is not uniformly continuous on .  Hint: compare the values of at and .   "
},
{
  "id": "ex-continuity-sin-one-over-x-not-uniformly-continuous",
  "level": "2",
  "url": "ex-ch4.html#ex-continuity-sin-one-over-x-not-uniformly-continuous",
  "type": "Exercise",
  "number": "4.6.17",
  "title": "",
  "body": "  Show that is not uniformly continuous on .  Hint: use .   "
},
{
  "id": "sec-derivative",
  "level": "1",
  "url": "sec-derivative.html",
  "type": "Section",
  "number": "5.1",
  "title": "Derivative",
  "body": " Derivative   Continuity says that nearby inputs produce nearby outputs. The derivative asks for something more precise: whether, near a point, the change in is approximately proportional to the change in . This leads to the slope of the tangent line and, more importantly for analysis, to a first-order approximation of the function.    Derivative at a Point  Let , let , and let be a cluster point of . We say that is differentiable at differentiable at a point  if the limit exists. In that case, this limit is called the derivative derivative of at and is denoted by   If is an interval and is an endpoint of , then the same definition is understood one-sidedly, using only points of near . Thus, on , differentiability at means the existence of the right-hand limit and differentiability at means the existence of the left-hand limit We say that is differentiable on differentiable on an interval an interval if it is differentiable at each point of the interval, with this endpoint convention when needed.    The function is differentiable on , and for every . Indeed,       The function is not differentiable at . For , , while for , . Since the left and right limits are different, the derivative at does not exist.   The graph of has a corner at , so there is no single tangent slope there.   The graph of y equals absolute value of x has a V-shape with vertex at the origin.         Carathéodory's Criterion  The derivative is defined as a limit of quotients, but there is another viewpoint that is often more flexible: differentiability at means that factors as times a function that is continuous at .   Carathéodory's Criterion   Let , let , and let be a cluster point of . Then is differentiable at if and only if there exists a function , continuous at , such that for every . In that case,     First suppose that is differentiable at . Define Then for every . Also, for the definition of derivative gives so is continuous at .  Conversely, suppose there exists , continuous at , such that for every . Then for we have Since is continuous at , it follows that Hence is differentiable at and .    Since Carathéodory's Criterion is equivalent to the classical limit definition of differentiability, we will use these two formulations interchangeably.    If is differentiable at , then is continuous at .    By , there exists , continuous at , such that The function is continuous, so is continuous at by . Therefore is continuous at .      Rules of Differentiation  Carathéodory's criterion is especially effective for proving the differentiation rules. The point is that differentiability has been converted into a factorization statement, and such factorizations are easy to combine.   Sum and Product Rules   Let , let , let , and let . If and are differentiable at , then so are , , and . Moreover,  and     By , there exist functions , both continuous at , such that Also and .  Multiplying the first identity by , we get Since is continuous at , shows that is differentiable at and .  Adding the two identities gives Since is continuous at , is differentiable at , and   For the product, By , is continuous at . Therefore is continuous at . Another application of yields the product rule:      Chain Rule   Let , let , and let . If is differentiable at and is differentiable at , then is differentiable at , and     By , there exist functions and such that is continuous at , is continuous at , and for , while for . Also and .  Substituting into the second identity gives By , is continuous at , and hence so is . Therefore shows that is differentiable at , with       The hypotheses in the sum, product, and chain rules are sufficient, but not necessary. For example:   Neither nor is differentiable at , but is differentiable at .  The function is not differentiable at , but is differentiable at .  The function is not differentiable at , but if , then is differentiable at .       Derivatives of Inverse Functions  Suppose has an inverse function . Since , the chain rule suggests that the derivative of the inverse should be the reciprocal of the derivative of . The next proposition makes this precise.   Derivative of an Inverse Function   Let be intervals, let be a continuous bijection, and let . Suppose that is differentiable at and that . If and , then is differentiable at , and   If, in addition, is differentiable on and for every , then is differentiable on , and If is also continuous on , then is continuous on .    Let . By , the inverse is continuous on . By , there exists a function , continuous at , such that and .  Now let . Since and , substituting gives Because is continuous at and is continuous at , the function is continuous at . Also, , so is defined and continuous at . Therefore Another application of shows that is differentiable at and that   If is differentiable on and never vanishes there, then the same argument applies at each point . Hence is differentiable on and satisfies for every . If is continuous on , then is continuous on , so is continuous on by . Since for every , is continuous on .    The proposition explains how to differentiate an inverse once we know that the inverse exists and is continuous. To guarantee this locally, it is enough to assume that the derivative is continuous near the point and does not vanish there.   Single-Variable Inverse Function Theorem   Let be continuously differentiable, and let satisfy . Then there exists an open interval containing such that the restriction is injective. If and , then is continuously differentiable on and     Since is continuous at and , there exists an open interval containing such that either for every or for every . By , the restriction is strictly monotone, hence injective.  Because is continuous and is an interval, is also an interval. Now apply to the restriction . Since is continuous on and never vanishes on , the inverse is continuously differentiable and satisfies for all .      The inverse function theorem is a local result. Let on , and take . Then , so the theorem applies near . For example, on the function is injective, and its inverse is . But is not injective on all of , since . Thus the interval in the theorem may have to be smaller than the original domain.      The condition cannot be omitted. The function is a continuous bijection from onto , and it is differentiable everywhere. Its inverse is . However, , and is not differentiable at , because for , and this does not approach a finite limit as .      The continuity of near is also important for the local existence of an inverse. Define Then is differentiable at and . For , This derivative is not continuous at .  In fact, is not injective on any neighborhood of . For , let Then and . A Taylor expansion of and at shows that, for all sufficiently large , Since is continuous on the closed interval , the function attains its maximum on that interval at some interior point. Therefore takes some value twice on . As these intervals shrink to , no neighborhood of can be one-to-one.     "
},
{
  "id": "subsec-derivative-at-a-point-2",
  "level": "2",
  "url": "sec-derivative.html#subsec-derivative-at-a-point-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differentiable at derivative "
},
{
  "id": "subsec-derivative-at-a-point-3",
  "level": "2",
  "url": "sec-derivative.html#subsec-derivative-at-a-point-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differentiable on "
},
{
  "id": "eg-derivative-of-square",
  "level": "2",
  "url": "sec-derivative.html#eg-derivative-of-square",
  "type": "Example",
  "number": "5.1.1",
  "title": "",
  "body": "  The function is differentiable on , and for every . Indeed,    "
},
{
  "id": "eg-absolute-value-not-differentiable",
  "level": "2",
  "url": "sec-derivative.html#eg-absolute-value-not-differentiable",
  "type": "Example",
  "number": "5.1.2",
  "title": "",
  "body": "  The function is not differentiable at . For , , while for , . Since the left and right limits are different, the derivative at does not exist.   The graph of has a corner at , so there is no single tangent slope there.   The graph of y equals absolute value of x has a V-shape with vertex at the origin.      "
},
{
  "id": "prop-caratheodory-criterion",
  "level": "2",
  "url": "sec-derivative.html#prop-caratheodory-criterion",
  "type": "Proposition",
  "number": "5.1.4",
  "title": "Carathéodory’s Criterion.",
  "body": " Carathéodory's Criterion   Let , let , and let be a cluster point of . Then is differentiable at if and only if there exists a function , continuous at , such that for every . In that case,     First suppose that is differentiable at . Define Then for every . Also, for the definition of derivative gives so is continuous at .  Conversely, suppose there exists , continuous at , such that for every . Then for we have Since is continuous at , it follows that Hence is differentiable at and .   "
},
{
  "id": "prop-differentiable-implies-continuous",
  "level": "2",
  "url": "sec-derivative.html#prop-differentiable-implies-continuous",
  "type": "Proposition",
  "number": "5.1.5",
  "title": "",
  "body": "  If is differentiable at , then is continuous at .    By , there exists , continuous at , such that The function is continuous, so is continuous at by . Therefore is continuous at .   "
},
{
  "id": "prop-derivative-sum-product-rules",
  "level": "2",
  "url": "sec-derivative.html#prop-derivative-sum-product-rules",
  "type": "Proposition",
  "number": "5.1.6",
  "title": "Sum and Product Rules.",
  "body": " Sum and Product Rules   Let , let , let , and let . If and are differentiable at , then so are , , and . Moreover,  and     By , there exist functions , both continuous at , such that Also and .  Multiplying the first identity by , we get Since is continuous at , shows that is differentiable at and .  Adding the two identities gives Since is continuous at , is differentiable at , and   For the product, By , is continuous at . Therefore is continuous at . Another application of yields the product rule:    "
},
{
  "id": "thm-chain-rule",
  "level": "2",
  "url": "sec-derivative.html#thm-chain-rule",
  "type": "Theorem",
  "number": "5.1.7",
  "title": "Chain Rule.",
  "body": " Chain Rule   Let , let , and let . If is differentiable at and is differentiable at , then is differentiable at , and     By , there exist functions and such that is continuous at , is continuous at , and for , while for . Also and .  Substituting into the second identity gives By , is continuous at , and hence so is . Therefore shows that is differentiable at , with    "
},
{
  "id": "eg-differentiability-hypotheses-not-necessary",
  "level": "2",
  "url": "sec-derivative.html#eg-differentiability-hypotheses-not-necessary",
  "type": "Example",
  "number": "5.1.8",
  "title": "",
  "body": "  The hypotheses in the sum, product, and chain rules are sufficient, but not necessary. For example:   Neither nor is differentiable at , but is differentiable at .  The function is not differentiable at , but is differentiable at .  The function is not differentiable at , but if , then is differentiable at .    "
},
{
  "id": "prop-derivative-of-inverse-function",
  "level": "2",
  "url": "sec-derivative.html#prop-derivative-of-inverse-function",
  "type": "Proposition",
  "number": "5.1.9",
  "title": "Derivative of an Inverse Function.",
  "body": " Derivative of an Inverse Function   Let be intervals, let be a continuous bijection, and let . Suppose that is differentiable at and that . If and , then is differentiable at , and   If, in addition, is differentiable on and for every , then is differentiable on , and If is also continuous on , then is continuous on .    Let . By , the inverse is continuous on . By , there exists a function , continuous at , such that and .  Now let . Since and , substituting gives Because is continuous at and is continuous at , the function is continuous at . Also, , so is defined and continuous at . Therefore Another application of shows that is differentiable at and that   If is differentiable on and never vanishes there, then the same argument applies at each point . Hence is differentiable on and satisfies for every . If is continuous on , then is continuous on , so is continuous on by . Since for every , is continuous on .   "
},
{
  "id": "thm-single-variable-inverse-function",
  "level": "2",
  "url": "sec-derivative.html#thm-single-variable-inverse-function",
  "type": "Theorem",
  "number": "5.1.10",
  "title": "Single-Variable Inverse Function Theorem.",
  "body": " Single-Variable Inverse Function Theorem   Let be continuously differentiable, and let satisfy . Then there exists an open interval containing such that the restriction is injective. If and , then is continuously differentiable on and     Since is continuous at and , there exists an open interval containing such that either for every or for every . By , the restriction is strictly monotone, hence injective.  Because is continuous and is an interval, is also an interval. Now apply to the restriction . Since is continuous on and never vanishes on , the inverse is continuously differentiable and satisfies for all .   "
},
{
  "id": "eg-inverse-function-theorem-is-local",
  "level": "2",
  "url": "sec-derivative.html#eg-inverse-function-theorem-is-local",
  "type": "Example",
  "number": "5.1.11",
  "title": "",
  "body": "  The inverse function theorem is a local result. Let on , and take . Then , so the theorem applies near . For example, on the function is injective, and its inverse is . But is not injective on all of , since . Thus the interval in the theorem may have to be smaller than the original domain.   "
},
{
  "id": "eg-derivative-nonzero-needed-for-inverse",
  "level": "2",
  "url": "sec-derivative.html#eg-derivative-nonzero-needed-for-inverse",
  "type": "Example",
  "number": "5.1.12",
  "title": "",
  "body": "  The condition cannot be omitted. The function is a continuous bijection from onto , and it is differentiable everywhere. Its inverse is . However, , and is not differentiable at , because for , and this does not approach a finite limit as .   "
},
{
  "id": "eg-inverse-function-theorem-needs-derivative-continuity",
  "level": "2",
  "url": "sec-derivative.html#eg-inverse-function-theorem-needs-derivative-continuity",
  "type": "Example",
  "number": "5.1.13",
  "title": "",
  "body": "  The continuity of near is also important for the local existence of an inverse. Define Then is differentiable at and . For , This derivative is not continuous at .  In fact, is not injective on any neighborhood of . For , let Then and . A Taylor expansion of and at shows that, for all sufficiently large , Since is continuous on the closed interval , the function attains its maximum on that interval at some interior point. Therefore takes some value twice on . As these intervals shrink to , no neighborhood of can be one-to-one.   "
},
{
  "id": "sec-differentiability-classes",
  "level": "1",
  "url": "sec-differentiability-classes.html",
  "type": "Section",
  "number": "5.2",
  "title": "Differentiability Classes",
  "body": " Differentiability Classes   Continuity and differentiability come in layers. A function may be differentiable without having a continuous derivative, and a function may have many derivatives without having one more. This leads to the standard hierarchy of classes and .   Let be an open interval. For , let be the set of functions that are times differentiable differentiability classes on , and let be the set of functions whose -th derivative exists and is continuous on . We also set equal to the set of continuous functions on .   The Hierarchy of Differentiability Classes   For every open interval , If we define then also     The inclusion is just the fact that differentiability implies continuity ( ). More generally, if , then is differentiable on , hence continuous. Therefore , so for every .  On the other hand, if , then by definition exists, so certainly . Thus for every . Chaining these inclusions gives the stated hierarchy.  Since for each , a function belongs to every if and only if it belongs to every . This proves the identity for .    The inclusions in are all strict. The first strict inclusion already appears in : there exists a differentiable function whose derivative is not continuous at . The next two examples show that this phenomenon persists at every order.    For each , define Then     For and , repeated differentiation gives Since , both one-sided limits at are equal to . So each derivative up to order extends continuously across . Hence .  For , the -th derivative is The left and right limits at are different, so does not exist. Therefore .      For each , define Then     We claim that, for each , the derivative for is a finite linear combination of terms of the form where . This is true for . If it holds for some , then differentiating one such term either lowers the power of by or by , so after one more differentiation all exponents are still at least . Thus the claim follows by induction.  In particular, if , then every exponent that occurs is at least . Hence as . Therefore , and because every term in still has a positive power of . Thus exists and equals . By induction, .  After differentiating exactly times, there is a term with power : it comes from differentiating the trigonometric factor in every step. So has the form for , where are finite linear combinations of powers of and at least one of or is nonzero. Consequently, oscillates as and is not continuous at . Hence .    Later, in , we will meet analytic functions. Every analytic function belongs to , but the example above shows that belonging to is still not enough to force a function to agree with a power series.  "
},
{
  "id": "sec-differentiability-classes-3",
  "level": "2",
  "url": "sec-differentiability-classes.html#sec-differentiability-classes-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "times differentiable "
},
{
  "id": "prop-differentiability-class-hierarchy",
  "level": "2",
  "url": "sec-differentiability-classes.html#prop-differentiability-class-hierarchy",
  "type": "Proposition",
  "number": "5.2.1",
  "title": "The Hierarchy of Differentiability Classes.",
  "body": " The Hierarchy of Differentiability Classes   For every open interval , If we define then also     The inclusion is just the fact that differentiability implies continuity ( ). More generally, if , then is differentiable on , hence continuous. Therefore , so for every .  On the other hand, if , then by definition exists, so certainly . Thus for every . Chaining these inclusions gives the stated hierarchy.  Since for each , a function belongs to every if and only if it belongs to every . This proves the identity for .   "
},
{
  "id": "eg-c-n-minus-1-not-d-n",
  "level": "2",
  "url": "sec-differentiability-classes.html#eg-c-n-minus-1-not-d-n",
  "type": "Example",
  "number": "5.2.2",
  "title": "",
  "body": "  For each , define Then     For and , repeated differentiation gives Since , both one-sided limits at are equal to . So each derivative up to order extends continuously across . Hence .  For , the -th derivative is The left and right limits at are different, so does not exist. Therefore .   "
},
{
  "id": "eg-d-n-not-c-n",
  "level": "2",
  "url": "sec-differentiability-classes.html#eg-d-n-not-c-n",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": "  For each , define Then     We claim that, for each , the derivative for is a finite linear combination of terms of the form where . This is true for . If it holds for some , then differentiating one such term either lowers the power of by or by , so after one more differentiation all exponents are still at least . Thus the claim follows by induction.  In particular, if , then every exponent that occurs is at least . Hence as . Therefore , and because every term in still has a positive power of . Thus exists and equals . By induction, .  After differentiating exactly times, there is a term with power : it comes from differentiating the trigonometric factor in every step. So has the form for , where are finite linear combinations of powers of and at least one of or is nonzero. Consequently, oscillates as and is not continuous at . Hence .   "
},
{
  "id": "sec-the-mean-value-theorem",
  "level": "1",
  "url": "sec-the-mean-value-theorem.html",
  "type": "Section",
  "number": "5.3",
  "title": "The Mean Value Theorem",
  "body": " The Mean Value Theorem   The derivative is defined pointwise, but the next results show that it controls the global behavior of a function on an interval. Rolle's theorem and the Mean Value Theorem connect endpoint information with the derivative at some interior point. They are among the central tools of differential calculus.    Critical Points and Rolle's Theorem   Critical Point Theorem   Let , and let . If has a local maximum or a local minimum at and is differentiable at , then     Suppose has a local maximum at . Then for all sufficiently close to , we have . If , then , so If , then , so Since the derivative exists, both one-sided limits of the difference quotient equal . Hence and , so . The proof for a local minimum is analogous.     Rolle's Theorem   Let . Assume that   is continuous on ,  is differentiable on ,  .   Then there exists such that     By , attains an absolute minimum and an absolute maximum on . If these are equal, then is constant, so for every .  Otherwise at least one of the two extreme values is different from . If the minimum is different from , then the point where the minimum is attained cannot be or , so it lies in . The then gives a point with . The same argument works if the maximum is different from .      The Mean Value Theorems  Rolle's theorem is already useful, but its most important role is as the model for the Mean Value Theorem. The idea is simple: subtract a suitable linear function so that the new function has equal endpoint values, then apply Rolle's theorem.   Mean Value Theorem   Let . Assume that is continuous on and differentiable on . Then there exists such that     Let the secant line through the points and . Define . Then is continuous on and differentiable on . Also By , there exists such that . Since we obtain    For a differentiable function, some tangent line is parallel to the secant line joining the endpoints.   A parabola on an interval with a secant line through the endpoints and a tangent line at an interior point having the same slope.         Each hypothesis in the Mean Value Theorem is necessary.   The function is differentiable on and satisfies , but it is not continuous on and there is no with .  The function is continuous on and satisfies , but it is not differentiable at and there is no with .      Cauchy's Mean Value Theorem   Let . Assume that and are continuous on and differentiable on . Then there exists such that     Define Then is continuous on and differentiable on . Also . By , there exists such that . Since we obtain     Taking in Cauchy's theorem recovers the ordinary Mean Value Theorem. So Cauchy's version is a genuine generalization rather than a separate result.   "
},
{
  "id": "prop-critical-point-theorem",
  "level": "2",
  "url": "sec-the-mean-value-theorem.html#prop-critical-point-theorem",
  "type": "Proposition",
  "number": "5.3.1",
  "title": "Critical Point Theorem.",
  "body": " Critical Point Theorem   Let , and let . If has a local maximum or a local minimum at and is differentiable at , then     Suppose has a local maximum at . Then for all sufficiently close to , we have . If , then , so If , then , so Since the derivative exists, both one-sided limits of the difference quotient equal . Hence and , so . The proof for a local minimum is analogous.   "
},
{
  "id": "thm-rolle",
  "level": "2",
  "url": "sec-the-mean-value-theorem.html#thm-rolle",
  "type": "Theorem",
  "number": "5.3.2",
  "title": "Rolle’s Theorem.",
  "body": " Rolle's Theorem   Let . Assume that   is continuous on ,  is differentiable on ,  .   Then there exists such that     By , attains an absolute minimum and an absolute maximum on . If these are equal, then is constant, so for every .  Otherwise at least one of the two extreme values is different from . If the minimum is different from , then the point where the minimum is attained cannot be or , so it lies in . The then gives a point with . The same argument works if the maximum is different from .   "
},
{
  "id": "thm-mean-value-theorem",
  "level": "2",
  "url": "sec-the-mean-value-theorem.html#thm-mean-value-theorem",
  "type": "Theorem",
  "number": "5.3.3",
  "title": "Mean Value Theorem.",
  "body": " Mean Value Theorem   Let . Assume that is continuous on and differentiable on . Then there exists such that     Let the secant line through the points and . Define . Then is continuous on and differentiable on . Also By , there exists such that . Since we obtain    For a differentiable function, some tangent line is parallel to the secant line joining the endpoints.   A parabola on an interval with a secant line through the endpoints and a tangent line at an interior point having the same slope.      "
},
{
  "id": "eg-mvt-hypotheses-necessary",
  "level": "2",
  "url": "sec-the-mean-value-theorem.html#eg-mvt-hypotheses-necessary",
  "type": "Example",
  "number": "5.3.5",
  "title": "",
  "body": "  Each hypothesis in the Mean Value Theorem is necessary.   The function is differentiable on and satisfies , but it is not continuous on and there is no with .  The function is continuous on and satisfies , but it is not differentiable at and there is no with .    "
},
{
  "id": "thm-cauchy-mean-value-theorem",
  "level": "2",
  "url": "sec-the-mean-value-theorem.html#thm-cauchy-mean-value-theorem",
  "type": "Theorem",
  "number": "5.3.6",
  "title": "Cauchy’s Mean Value Theorem.",
  "body": " Cauchy's Mean Value Theorem   Let . Assume that and are continuous on and differentiable on . Then there exists such that     Define Then is continuous on and differentiable on . Also . By , there exists such that . Since we obtain    "
},
{
  "id": "sec-applications-of-differentiation",
  "level": "1",
  "url": "sec-applications-of-differentiation.html",
  "type": "Section",
  "number": "5.4",
  "title": "Applications",
  "body": " Applications   The Mean Value Theorem turns derivative information into comparisons of function values. This lets us read off monotonicity, detect local extrema, and prove qualitative facts about derivatives themselves. At the end of the section we include a brief preview of the Fundamental Theorem of Calculus, assuming the usual properties of the definite integral.    Monotonicity    Let be an open interval, and let be differentiable on .    The function is increasing on if and only if for every .    The function is decreasing on if and only if for every .      We prove the increasing case; the decreasing case follows by applying the same argument to . First suppose that is increasing on . Fix . By Carathéodory's Criterion ( ), there exists a function , continuous at , such that for all , and . For , monotonicity of gives Since is continuous at , it follows that .  Conversely, suppose that for every . Let with . By the Mean Value Theorem ( ), applied to the restriction of to , there exists such that Since and , we have . Hence , so is increasing on .      Let be an open interval, and let be differentiable on .   If for every , then is strictly increasing on .  If for every , then is strictly decreasing on .     Again we prove only the increasing case. Let with . By the Mean Value Theorem ( ), there exists such that Since and , we get . Therefore is strictly increasing on .      The converse of is false. The function is strictly increasing on , but .   The function is strictly increasing even though its tangent is horizontal at .   The graph of y equals x cubed rises from left to right and has a horizontal tangent at the origin.         Let be an open interval, and let be differentiable on . If for every , then is constant on .    By , is both increasing and decreasing on . Hence is constant on .    The fact that the domain is an interval is essential here. For example, define by Then for every point of its domain, but is not constant. What remains true in general is that is constant on each interval component of its domain.    Derivative Tests for Extrema  The sign of the derivative often reveals where extrema occur. The first derivative test uses only the sign pattern of . The second derivative test packages the same idea into a convenient condition at a single point.   First Derivative Test   Let , and let be continuous on and differentiable on .    If on and on , then is a maximum point of on .    If on and on , then is a minimum point of on .    If the inequalities are strict, then the corresponding extremum is strict.    We prove the first statement. Let . The function is continuous on and differentiable on , so the Mean Value Theorem ( ) gives a point such that Since and , we obtain , that is, .  Similarly, if , then applying the Mean Value Theorem to gives such that Since and , we get . Therefore for every , so is a maximum point of . The strict case is identical, with replaced by and replaced by . The second statement follows by applying the first to .     Second Derivative Test   Let be defined on a neighborhood of , and suppose that is twice differentiable at with .   If , then is a strict local minimum of .  If , then is a strict local maximum of .     We prove the first statement. Apply Carathéodory's Criterion ( ) to at . Then there exists a function , continuous at , such that for all near , and . Since , this becomes   Because is continuous at and , there exists such that whenever . Hence on and on . By the First Derivative Test ( ), is a strict local minimum of . The second statement follows by applying the first to .      Darboux's Theorem and a Preview of the FTC   Darboux's Theorem   Let be differentiable on . If lies between and , then there exists such that     Replacing by , it suffices to prove the theorem in the case . Replacing by if necessary, we may further assume that .  Since is differentiable at , Carathéodory's Criterion ( ) gives a function , continuous at , such that for all , with . Hence for all sufficiently close to . Since also , it follows that for such . Therefore is not a minimum point of on .  A similar argument at shows that is not a minimum point either. Indeed, Carathéodory's Criterion gives a function , continuous at , such that for all , with . Thus for all sufficiently close to . Since then , we obtain . Hence is not a minimum point of .  By the Extreme Value Theorem ( ), attains its minimum value at some point . Thus, we must have . The Critical Point Theorem ( ) then gives , as required.    Darboux's theorem shows that derivatives have the intermediate value property, even though derivatives need not be continuous. We now record one further application of the earlier results. This final part depends on the usual properties of the definite integral, which we have not yet developed systematically, so it should be viewed as a preview.   Integral Mean Value Theorem   Assume the basic properties of the definite integral. If is continuous, then there exists such that     By the Extreme Value Theorem ( ), attains an absolute minimum and an absolute maximum on . Hence Integrating gives Since , Because is continuous on , the Intermediate Value Theorem ( ) yields some such that Multiplying by gives the result.     Fundamental Theorem of Calculus (Special Case)   Assume the basic properties of the definite integral. If is continuous and then is differentiable on and for every .    Fix . Let be small enough that . Then By the Integral Mean Value Theorem ( ), there exists a point between and such that Therefore   Since lies between and , we have as . By continuity of , . Hence so .    This theorem is only a preview. In the integration chapter we prove the more general second form of the Fundamental Theorem of Calculus ( ), where the integrand is assumed only to be Riemann integrable and the conclusion is differentiability at points of continuity of the integrand.    Assume the basic properties of the definite integral. If is continuous and is any antiderivative of on , then     Let . By the Fundamental Theorem of Calculus (Special Case) ( ), both and are antiderivatives of on . Hence for every . By , the function is constant on . Since both and are continuous on , it follows that is constant on all of .  Evaluating at , we obtain because . Therefore for every . Setting gives and rearranging yields     Likewise, the integration chapter proves the more general first form of the Fundamental Theorem of Calculus ( ) and the corresponding Newton-Leibniz formula ( ).   "
},
{
  "id": "prop-derivative-sign-and-monotonicity",
  "level": "2",
  "url": "sec-applications-of-differentiation.html#prop-derivative-sign-and-monotonicity",
  "type": "Proposition",
  "number": "5.4.1",
  "title": "",
  "body": "  Let be an open interval, and let be differentiable on .    The function is increasing on if and only if for every .    The function is decreasing on if and only if for every .      We prove the increasing case; the decreasing case follows by applying the same argument to . First suppose that is increasing on . Fix . By Carathéodory's Criterion ( ), there exists a function , continuous at , such that for all , and . For , monotonicity of gives Since is continuous at , it follows that .  Conversely, suppose that for every . Let with . By the Mean Value Theorem ( ), applied to the restriction of to , there exists such that Since and , we have . Hence , so is increasing on .   "
},
{
  "id": "prop-positive-derivative-implies-strictly-monotone",
  "level": "2",
  "url": "sec-applications-of-differentiation.html#prop-positive-derivative-implies-strictly-monotone",
  "type": "Proposition",
  "number": "5.4.2",
  "title": "",
  "body": "  Let be an open interval, and let be differentiable on .   If for every , then is strictly increasing on .  If for every , then is strictly decreasing on .     Again we prove only the increasing case. Let with . By the Mean Value Theorem ( ), there exists such that Since and , we get . Therefore is strictly increasing on .   "
},
{
  "id": "eg-x-cubed-increasing-flat-at-zero",
  "level": "2",
  "url": "sec-applications-of-differentiation.html#eg-x-cubed-increasing-flat-at-zero",
  "type": "Example",
  "number": "5.4.3",
  "title": "",
  "body": "  The converse of is false. The function is strictly increasing on , but .   The function is strictly increasing even though its tangent is horizontal at .   The graph of y equals x cubed rises from left to right and has a horizontal tangent at the origin.      "
},
{
  "id": "cor-derivative-zero-implies-constant",
  "level": "2",
  "url": "sec-applications-of-differentiation.html#cor-derivative-zero-implies-constant",
  "type": "Corollary",
  "number": "5.4.5",
  "title": "",
  "body": "  Let be an open interval, and let be differentiable on . If for every , then is constant on .    By , is both increasing and decreasing on . Hence is constant on .   "
},
{
  "id": "prop-first-derivative-test",
  "level": "2",
  "url": "sec-applications-of-differentiation.html#prop-first-derivative-test",
  "type": "Proposition",
  "number": "5.4.6",
  "title": "First Derivative Test.",
  "body": " First Derivative Test   Let , and let be continuous on and differentiable on .    If on and on , then is a maximum point of on .    If on and on , then is a minimum point of on .    If the inequalities are strict, then the corresponding extremum is strict.    We prove the first statement. Let . The function is continuous on and differentiable on , so the Mean Value Theorem ( ) gives a point such that Since and , we obtain , that is, .  Similarly, if , then applying the Mean Value Theorem to gives such that Since and , we get . Therefore for every , so is a maximum point of . The strict case is identical, with replaced by and replaced by . The second statement follows by applying the first to .   "
},
{
  "id": "prop-second-derivative-test",
  "level": "2",
  "url": "sec-applications-of-differentiation.html#prop-second-derivative-test",
  "type": "Proposition",
  "number": "5.4.7",
  "title": "Second Derivative Test.",
  "body": " Second Derivative Test   Let be defined on a neighborhood of , and suppose that is twice differentiable at with .   If , then is a strict local minimum of .  If , then is a strict local maximum of .     We prove the first statement. Apply Carathéodory's Criterion ( ) to at . Then there exists a function , continuous at , such that for all near , and . Since , this becomes   Because is continuous at and , there exists such that whenever . Hence on and on . By the First Derivative Test ( ), is a strict local minimum of . The second statement follows by applying the first to .   "
},
{
  "id": "thm-darboux-for-derivatives",
  "level": "2",
  "url": "sec-applications-of-differentiation.html#thm-darboux-for-derivatives",
  "type": "Theorem",
  "number": "5.4.8",
  "title": "Darboux’s Theorem.",
  "body": " Darboux's Theorem   Let be differentiable on . If lies between and , then there exists such that     Replacing by , it suffices to prove the theorem in the case . Replacing by if necessary, we may further assume that .  Since is differentiable at , Carathéodory's Criterion ( ) gives a function , continuous at , such that for all , with . Hence for all sufficiently close to . Since also , it follows that for such . Therefore is not a minimum point of on .  A similar argument at shows that is not a minimum point either. Indeed, Carathéodory's Criterion gives a function , continuous at , such that for all , with . Thus for all sufficiently close to . Since then , we obtain . Hence is not a minimum point of .  By the Extreme Value Theorem ( ), attains its minimum value at some point . Thus, we must have . The Critical Point Theorem ( ) then gives , as required.   "
},
{
  "id": "prop-integral-mean-value-theorem",
  "level": "2",
  "url": "sec-applications-of-differentiation.html#prop-integral-mean-value-theorem",
  "type": "Proposition",
  "number": "5.4.9",
  "title": "Integral Mean Value Theorem.",
  "body": " Integral Mean Value Theorem   Assume the basic properties of the definite integral. If is continuous, then there exists such that     By the Extreme Value Theorem ( ), attains an absolute minimum and an absolute maximum on . Hence Integrating gives Since , Because is continuous on , the Intermediate Value Theorem ( ) yields some such that Multiplying by gives the result.   "
},
{
  "id": "thm-ftc-special-case",
  "level": "2",
  "url": "sec-applications-of-differentiation.html#thm-ftc-special-case",
  "type": "Theorem",
  "number": "5.4.10",
  "title": "Fundamental Theorem of Calculus (Special Case).",
  "body": " Fundamental Theorem of Calculus (Special Case)   Assume the basic properties of the definite integral. If is continuous and then is differentiable on and for every .    Fix . Let be small enough that . Then By the Integral Mean Value Theorem ( ), there exists a point between and such that Therefore   Since lies between and , we have as . By continuity of , . Hence so .   "
},
{
  "id": "cor-newton-leibniz-special-case",
  "level": "2",
  "url": "sec-applications-of-differentiation.html#cor-newton-leibniz-special-case",
  "type": "Corollary",
  "number": "5.4.11",
  "title": "",
  "body": "  Assume the basic properties of the definite integral. If is continuous and is any antiderivative of on , then     Let . By the Fundamental Theorem of Calculus (Special Case) ( ), both and are antiderivatives of on . Hence for every . By , the function is constant on . Since both and are continuous on , it follows that is constant on all of .  Evaluating at , we obtain because . Therefore for every . Setting gives and rearranging yields    "
},
{
  "id": "ex-ch5",
  "level": "1",
  "url": "ex-ch5.html",
  "type": "Exercises",
  "number": "5.5",
  "title": "Exercises",
  "body": " Exercises    Show that the function is differentiable on . Compute .      Give examples of functions and such that neither nor is differentiable at , but:   is differentiable at ,  is differentiable at ,  is differentiable at .       Let and be differentiable at , and assume . Prove that is differentiable at and that       Use and induction on to prove that, for every , the function is differentiable on and satisfies       Consider the functions from with :  Compute several derivatives of these functions and verify that and .     Use with on to prove that is differentiable on and that       Let on .    Find an open interval containing such that is injective, and describe its inverse explicitly.    Find an open interval containing such that is injective, and describe its inverse explicitly.    Use to compute the derivative of each local inverse.        Give two examples showing that the hypotheses in are necessary:   one function that is differentiable on and satisfies , but is not continuous on and has no point with ;  one function that is continuous on and satisfies , but is not differentiable on and has no point with .       Let be continuous on and differentiable on . Assume that for every . Prove that for all .      Let be continuous on and differentiable on . Assume that for every . Use to prove that there exists such that       Let be continuous on and differentiable on . Prove directly from that if for every , then is constant on .      Use to find the local extrema of Also determine the absolute maximum and minimum of on the interval .      Find all critical points of Use where applicable to classify them. If the second derivative test is inconclusive at some critical point, analyze that point by another method.      Use to show that there does not exist a differentiable function such that and for every .      Assume the basic properties of the definite integral. Let be continuous and suppose that Prove that if for every , then there exists such that .      Assume the basic properties of the definite integral. Let be continuous, and suppose that for every . Use to prove that for every .    "
},
{
  "id": "ex-differentiation-x-abs-x",
  "level": "2",
  "url": "ex-ch5.html#ex-differentiation-x-abs-x",
  "type": "Exercise",
  "number": "5.5.1",
  "title": "",
  "body": "  Show that the function is differentiable on . Compute .   "
},
{
  "id": "ex-differentiation-rules-hypotheses-not-necessary",
  "level": "2",
  "url": "ex-ch5.html#ex-differentiation-rules-hypotheses-not-necessary",
  "type": "Exercise",
  "number": "5.5.2",
  "title": "",
  "body": "  Give examples of functions and such that neither nor is differentiable at , but:   is differentiable at ,  is differentiable at ,  is differentiable at .    "
},
{
  "id": "ex-differentiation-quotient-rule",
  "level": "2",
  "url": "ex-ch5.html#ex-differentiation-quotient-rule",
  "type": "Exercise",
  "number": "5.5.3",
  "title": "",
  "body": "  Let and be differentiable at , and assume . Prove that is differentiable at and that    "
},
{
  "id": "ex-differentiation-power-rule",
  "level": "2",
  "url": "ex-ch5.html#ex-differentiation-power-rule",
  "type": "Exercise",
  "number": "5.5.4",
  "title": "",
  "body": "  Use and induction on to prove that, for every , the function is differentiable on and satisfies    "
},
{
  "id": "ex-differentiation-classes-f4-g4",
  "level": "2",
  "url": "ex-ch5.html#ex-differentiation-classes-f4-g4",
  "type": "Exercise",
  "number": "5.5.5",
  "title": "",
  "body": "  Consider the functions from with :  Compute several derivatives of these functions and verify that and .  "
},
{
  "id": "ex-differentiation-sqrt-derivative",
  "level": "2",
  "url": "ex-ch5.html#ex-differentiation-sqrt-derivative",
  "type": "Exercise",
  "number": "5.5.6",
  "title": "",
  "body": "  Use with on to prove that is differentiable on and that    "
},
{
  "id": "ex-differentiation-local-inverses-of-square",
  "level": "2",
  "url": "ex-ch5.html#ex-differentiation-local-inverses-of-square",
  "type": "Exercise",
  "number": "5.5.7",
  "title": "",
  "body": "  Let on .    Find an open interval containing such that is injective, and describe its inverse explicitly.    Find an open interval containing such that is injective, and describe its inverse explicitly.    Use to compute the derivative of each local inverse.     "
},
{
  "id": "ex-differentiation-rolle-hypotheses-necessary",
  "level": "2",
  "url": "ex-ch5.html#ex-differentiation-rolle-hypotheses-necessary",
  "type": "Exercise",
  "number": "5.5.8",
  "title": "",
  "body": "  Give two examples showing that the hypotheses in are necessary:   one function that is differentiable on and satisfies , but is not continuous on and has no point with ;  one function that is continuous on and satisfies , but is not differentiable on and has no point with .    "
},
{
  "id": "ex-differentiation-bounded-derivative-lipschitz",
  "level": "2",
  "url": "ex-ch5.html#ex-differentiation-bounded-derivative-lipschitz",
  "type": "Exercise",
  "number": "5.5.9",
  "title": "",
  "body": "  Let be continuous on and differentiable on . Assume that for every . Prove that for all .   "
},
{
  "id": "ex-differentiation-cauchy-mvt-ratio",
  "level": "2",
  "url": "ex-ch5.html#ex-differentiation-cauchy-mvt-ratio",
  "type": "Exercise",
  "number": "5.5.10",
  "title": "",
  "body": "  Let be continuous on and differentiable on . Assume that for every . Use to prove that there exists such that    "
},
{
  "id": "ex-differentiation-derivative-zero-constant-mvt",
  "level": "2",
  "url": "ex-ch5.html#ex-differentiation-derivative-zero-constant-mvt",
  "type": "Exercise",
  "number": "5.5.11",
  "title": "",
  "body": "  Let be continuous on and differentiable on . Prove directly from that if for every , then is constant on .   "
},
{
  "id": "ex-differentiation-first-derivative-test-cubic",
  "level": "2",
  "url": "ex-ch5.html#ex-differentiation-first-derivative-test-cubic",
  "type": "Exercise",
  "number": "5.5.12",
  "title": "",
  "body": "  Use to find the local extrema of Also determine the absolute maximum and minimum of on the interval .   "
},
{
  "id": "ex-differentiation-second-derivative-test-quartic",
  "level": "2",
  "url": "ex-ch5.html#ex-differentiation-second-derivative-test-quartic",
  "type": "Exercise",
  "number": "5.5.13",
  "title": "",
  "body": "  Find all critical points of Use where applicable to classify them. If the second derivative test is inconclusive at some critical point, analyze that point by another method.   "
},
{
  "id": "ex-differentiation-darboux-no-zero-free-derivative",
  "level": "2",
  "url": "ex-ch5.html#ex-differentiation-darboux-no-zero-free-derivative",
  "type": "Exercise",
  "number": "5.5.14",
  "title": "",
  "body": "  Use to show that there does not exist a differentiable function such that and for every .   "
},
{
  "id": "ex-differentiation-integral-mean-value-zero",
  "level": "2",
  "url": "ex-ch5.html#ex-differentiation-integral-mean-value-zero",
  "type": "Exercise",
  "number": "5.5.15",
  "title": "",
  "body": "  Assume the basic properties of the definite integral. Let be continuous and suppose that Prove that if for every , then there exists such that .   "
},
{
  "id": "ex-differentiation-ftc-zero-integral-function",
  "level": "2",
  "url": "ex-ch5.html#ex-differentiation-ftc-zero-integral-function",
  "type": "Exercise",
  "number": "5.5.16",
  "title": "",
  "body": "  Assume the basic properties of the definite integral. Let be continuous, and suppose that for every . Use to prove that for every .   "
},
{
  "id": "sec-power-series-radius",
  "level": "1",
  "url": "sec-power-series-radius.html",
  "type": "Section",
  "number": "6.1",
  "title": "Power Series and Radius of Convergence",
  "body": " Power Series and Radius of Convergence   A power series is a series whose terms are powers of . The root test from shows that such series have much more rigid convergence behavior than an arbitrary series: there is always a single radius inside which the series converges absolutely and outside which it diverges.   A power series power series centered at is a series of the form It always converges at the center . If it converges at some point , we call it a convergent power series ; otherwise it is a divergent power series .    Every radius of convergence can occur.    The series has radius of convergence . Indeed, because for large .    The geometric series has radius of convergence by .    The exponential series has radius of convergence , because the ratio test gives for every .       Radius of Convergence   Let be a power series. Then there exists a number such that:   the series converges absolutely for every with ,  the series diverges for every with .   Moreover, with the conventions and .    Fix and apply the root test to the series Since the root test shows that the series converges absolutely when this quantity is less than and diverges when it is greater than . Defining by the displayed formula gives the result.    The number is called the radius of convergence radius of convergence of the power series. The interval is called its interval of convergence interval of convergence . The theorem says nothing about the boundary points and ; these must be checked separately.    Boundary behavior can vary even when the radius of convergence is the same. Each of the following power series has radius .     diverges at both endpoints by .     diverges at by the -series test ( ) but converges at by the alternating series test ( ).     converges absolutely at both endpoints by .      By translating the variable, one may often reduce questions about a power series centered at to a power series centered at . For that reason, many examples below are written in the simpler form .  "
},
{
  "id": "sec-power-series-radius-3",
  "level": "2",
  "url": "sec-power-series-radius.html#sec-power-series-radius-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "power series convergent power series divergent power series "
},
{
  "id": "eg-power-series-radii",
  "level": "2",
  "url": "sec-power-series-radius.html#eg-power-series-radii",
  "type": "Example",
  "number": "6.1.1",
  "title": "",
  "body": "  Every radius of convergence can occur.    The series has radius of convergence . Indeed, because for large .    The geometric series has radius of convergence by .    The exponential series has radius of convergence , because the ratio test gives for every .     "
},
{
  "id": "thm-radius-of-convergence",
  "level": "2",
  "url": "sec-power-series-radius.html#thm-radius-of-convergence",
  "type": "Theorem",
  "number": "6.1.2",
  "title": "Radius of Convergence.",
  "body": " Radius of Convergence   Let be a power series. Then there exists a number such that:   the series converges absolutely for every with ,  the series diverges for every with .   Moreover, with the conventions and .    Fix and apply the root test to the series Since the root test shows that the series converges absolutely when this quantity is less than and diverges when it is greater than . Defining by the displayed formula gives the result.   "
},
{
  "id": "sec-power-series-radius-6",
  "level": "2",
  "url": "sec-power-series-radius.html#sec-power-series-radius-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "radius of convergence interval of convergence "
},
{
  "id": "eg-power-series-endpoint-behavior",
  "level": "2",
  "url": "sec-power-series-radius.html#eg-power-series-endpoint-behavior",
  "type": "Example",
  "number": "6.1.3",
  "title": "",
  "body": "  Boundary behavior can vary even when the radius of convergence is the same. Each of the following power series has radius .     diverges at both endpoints by .     diverges at by the -series test ( ) but converges at by the alternating series test ( ).     converges absolutely at both endpoints by .     "
},
{
  "id": "sec-calculus-of-power-series",
  "level": "1",
  "url": "sec-calculus-of-power-series.html",
  "type": "Section",
  "number": "6.2",
  "title": "Calculus of Power Series",
  "body": " Calculus of Power Series   Inside the interval of convergence, power series behave much like polynomials. In particular, they can be differentiated and integrated term by term. The full proof uses ideas about uniform convergence, but the behavior of the new coefficients is already visible from the root test.    Derived and Integrated Series Have the Same Radius   Suppose the power series has radius of convergence . Then the formal derivative and the formal integral also have radius of convergence .    Let so that by . Since by , we have Hence the formal derivative has radius .  Likewise, because , so the formal integral also has radius .     Term-by-Term Differentiation and Integration   Suppose has radius of convergence . Then on the interval the function is differentiable and has antiderivatives. Moreover, and     Fix with , and let . By , the original power series and its formal derivative both converge uniformly on . Let Each is a polynomial, so Also for every . Therefore applies and shows that the limit function is differentiable on , with   Likewise, since uniformly on , gives for every .  Since was arbitrary, both formulas hold throughout the entire interval .      We can compute the sum By the geometric series formula ( ), Differentiating term by term gives Multiplying by , we obtain Evaluating at gives       The geometric series also yields familiar expansions. Replacing by , we get Integrating from to gives   Likewise, so integrating from to yields      Abel's Theorem on Power Series   Let be a power series with radius of convergence . If the series converges to , then     Replacing by , we may assume without loss of generality that . Let Then .  For , the geometric series converges absolutely by . Hence Mertens' theorem ( ) applies to the product of and , and gives Therefore   Let . Since , there exists such that for all . Then for ,   For the remaining finitely many terms, let Then Since as , there exists such that implies .  Combining the two estimates, we obtain whenever . Thus . Undoing the initial reduction proves that .    By a simple change of variables, Abel's theorem also applies at either endpoint of a finite interval of convergence.    From , we know that The series at is the alternating harmonic series, which converges by . Since is continuous at , Abel's theorem gives     These examples illustrate a general principle: once a single power series is known, algebraic manipulations together with differentiation and integration often produce many others.  "
},
{
  "id": "prop-derived-integrated-power-series-radius",
  "level": "2",
  "url": "sec-calculus-of-power-series.html#prop-derived-integrated-power-series-radius",
  "type": "Proposition",
  "number": "6.2.1",
  "title": "Derived and Integrated Series Have the Same Radius.",
  "body": " Derived and Integrated Series Have the Same Radius   Suppose the power series has radius of convergence . Then the formal derivative and the formal integral also have radius of convergence .    Let so that by . Since by , we have Hence the formal derivative has radius .  Likewise, because , so the formal integral also has radius .   "
},
{
  "id": "thm-termwise-calculus-power-series",
  "level": "2",
  "url": "sec-calculus-of-power-series.html#thm-termwise-calculus-power-series",
  "type": "Theorem",
  "number": "6.2.2",
  "title": "Term-by-Term Differentiation and Integration.",
  "body": " Term-by-Term Differentiation and Integration   Suppose has radius of convergence . Then on the interval the function is differentiable and has antiderivatives. Moreover, and     Fix with , and let . By , the original power series and its formal derivative both converge uniformly on . Let Each is a polynomial, so Also for every . Therefore applies and shows that the limit function is differentiable on , with   Likewise, since uniformly on , gives for every .  Since was arbitrary, both formulas hold throughout the entire interval .   "
},
{
  "id": "eg-power-series-sum-n-over-two-power-n",
  "level": "2",
  "url": "sec-calculus-of-power-series.html#eg-power-series-sum-n-over-two-power-n",
  "type": "Example",
  "number": "6.2.3",
  "title": "",
  "body": "  We can compute the sum By the geometric series formula ( ), Differentiating term by term gives Multiplying by , we obtain Evaluating at gives    "
},
{
  "id": "eg-power-series-log-and-arctan",
  "level": "2",
  "url": "sec-calculus-of-power-series.html#eg-power-series-log-and-arctan",
  "type": "Example",
  "number": "6.2.4",
  "title": "",
  "body": "  The geometric series also yields familiar expansions. Replacing by , we get Integrating from to gives   Likewise, so integrating from to yields    "
},
{
  "id": "thm-abel-power-series",
  "level": "2",
  "url": "sec-calculus-of-power-series.html#thm-abel-power-series",
  "type": "Theorem",
  "number": "6.2.5",
  "title": "Abel’s Theorem on Power Series.",
  "body": " Abel's Theorem on Power Series   Let be a power series with radius of convergence . If the series converges to , then     Replacing by , we may assume without loss of generality that . Let Then .  For , the geometric series converges absolutely by . Hence Mertens' theorem ( ) applies to the product of and , and gives Therefore   Let . Since , there exists such that for all . Then for ,   For the remaining finitely many terms, let Then Since as , there exists such that implies .  Combining the two estimates, we obtain whenever . Thus . Undoing the initial reduction proves that .   "
},
{
  "id": "eg-abel-ln2",
  "level": "2",
  "url": "sec-calculus-of-power-series.html#eg-abel-ln2",
  "type": "Example",
  "number": "6.2.6",
  "title": "",
  "body": "  From , we know that The series at is the alternating harmonic series, which converges by . Since is continuous at , Abel's theorem gives    "
},
{
  "id": "sec-analytic-functions",
  "level": "1",
  "url": "sec-analytic-functions.html",
  "type": "Section",
  "number": "6.3",
  "title": "Analytic Functions",
  "body": " Analytic Functions  A function is said to be analytic at analytic at a point  if there exists a power series that converges to on some open interval containing . We say that is analytic on analytic on an open set an open set if it is analytic at every point of .  Thus analytic functions are exactly those functions that locally agree with power series. The next result shows that such a representation, if it exists, is forced to be the Taylor series.   Analytic Functions Are Given by Their Taylor Series   Suppose is analytic at . Then is infinitely differentiable on some neighborhood of , and there exists such that In particular, the power series representation of about is unique.    Since is analytic at , there is a power series on some interval . By , we may differentiate term by term on this interval. Repeating this process times gives   Setting leaves only the term with , so Hence and substituting this into the original series gives the desired Taylor expansion. Since each coefficient is uniquely determined by , the representation is unique.    The theorem shows that analytic functions are automatically . The converse is false: a function may be infinitely differentiable and still fail to agree with its Taylor series.    Define Then is infinitely differentiable on , and every derivative of at is equal to . Therefore the Taylor series of at is the zero series. However, for every , so does not agree with that Taylor series on any neighborhood of . Thus is not analytic at .    The previous example shows that a smooth function may fail to agree with its Taylor series even when that Taylor series converges everywhere. There are also smooth functions whose Taylor series at a point does not converge anywhere except at that point.    Consider One can show, by differentiating under the integral sign, that is and that Consequently the Taylor coefficient has absolute value for infinitely many . Since the -th roots of these coefficients tend to . The root test therefore shows that the Taylor series of at has radius of convergence . So this Taylor series diverges for every .     Borel-Peano Theorem   For every formal power series there exists a function whose Taylor series at is exactly     In other words, every formal power series occurs as the Taylor series of some smooth function, whether or not that series converges. For a readable account, see and the historical note .  Further examples and discussion of non-analytic smooth functions can be found in .  "
},
{
  "id": "sec-analytic-functions-2",
  "level": "2",
  "url": "sec-analytic-functions.html#sec-analytic-functions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "analytic at analytic on "
},
{
  "id": "thm-analytic-functions-unique-taylor-series",
  "level": "2",
  "url": "sec-analytic-functions.html#thm-analytic-functions-unique-taylor-series",
  "type": "Theorem",
  "number": "6.3.1",
  "title": "Analytic Functions Are Given by Their Taylor Series.",
  "body": " Analytic Functions Are Given by Their Taylor Series   Suppose is analytic at . Then is infinitely differentiable on some neighborhood of , and there exists such that In particular, the power series representation of about is unique.    Since is analytic at , there is a power series on some interval . By , we may differentiate term by term on this interval. Repeating this process times gives   Setting leaves only the term with , so Hence and substituting this into the original series gives the desired Taylor expansion. Since each coefficient is uniquely determined by , the representation is unique.   "
},
{
  "id": "eg-smooth-not-analytic",
  "level": "2",
  "url": "sec-analytic-functions.html#eg-smooth-not-analytic",
  "type": "Example",
  "number": "6.3.2",
  "title": "",
  "body": "  Define Then is infinitely differentiable on , and every derivative of at is equal to . Therefore the Taylor series of at is the zero series. However, for every , so does not agree with that Taylor series on any neighborhood of . Thus is not analytic at .   "
},
{
  "id": "eg-smooth-divergent-taylor-series",
  "level": "2",
  "url": "sec-analytic-functions.html#eg-smooth-divergent-taylor-series",
  "type": "Example",
  "number": "6.3.3",
  "title": "",
  "body": "  Consider One can show, by differentiating under the integral sign, that is and that Consequently the Taylor coefficient has absolute value for infinitely many . Since the -th roots of these coefficients tend to . The root test therefore shows that the Taylor series of at has radius of convergence . So this Taylor series diverges for every .   "
},
{
  "id": "thm-borel-peano",
  "level": "2",
  "url": "sec-analytic-functions.html#thm-borel-peano",
  "type": "Theorem",
  "number": "6.3.4",
  "title": "Borel-Peano Theorem.",
  "body": " Borel-Peano Theorem   For every formal power series there exists a function whose Taylor series at is exactly    "
},
{
  "id": "sec-taylors-theorem",
  "level": "1",
  "url": "sec-taylors-theorem.html",
  "type": "Section",
  "number": "6.4",
  "title": "Taylor’s Theorem",
  "body": " Taylor's Theorem   Taylor's theorem explains how a sufficiently differentiable function is approximated by its Taylor polynomial. Its proof is a repeated application of Rolle's theorem from , so it is a genuine outgrowth of the Mean Value Theorem ( ).   Let be a function with derivatives up to order near . The -th Taylor polynomial Taylor polynomial of at is   We say that is a zero of multiplicity zero of multiplicity at least of if     Let have derivatives on an interval . Suppose is a zero of multiplicity at least of , and suppose is another zero of . Then there exists a point strictly between and such that     Since , Rolle's theorem ( ) gives a point between and such that . Because is still a zero of multiplicity at least for , Rolle's theorem applied to on the interval with endpoints and gives a point between them such that .  Repeating this argument yields points , each lying strictly between and , with Taking completes the proof.     Taylor's Theorem   Suppose has derivatives up to order on an open interval containing and . Then there exists a point between and such that   The final term is called the Lagrange remainder Lagrange remainder .    The case is immediate, so assume . Choose a constant so that the function satisfies . Since matches the first derivatives of at , the point is a zero of multiplicity at least of .  By , there exists a point between and such that . But the polynomial has zero -st derivative, so Evaluating at gives hence Substituting this value of into the definition of and using yields the formula.    When , Taylor's theorem reduces to the Mean Value Theorem. So it is best viewed as a higher-order version of the same idea.  There is another useful expression for the remainder term. It is especially well suited to error estimates and to proving power-series expansions of familiar functions.   Integration by Parts   Assume the basic properties of the definite integral. If are continuously differentiable, then     By the product rule ( ), Integrating both sides from to and applying to the function , we get Rearranging gives the result.    This is a convenient special case tailored to the present argument. A more general integration-by-parts formula, together with a change-of-variables theorem, appears later in the integration chapter; see and .   Taylor's Theorem with Integral Remainder   Assume the basic properties of the definite integral. Suppose , where is a closed interval with endpoints and . Then   The final term is called the integral form of the remainder integral remainder .    If , the formula is immediate. If , then the same argument applied on the interval with endpoints and gives the result after reversing the limits of integration. So it is enough to treat the case .  For each , define   When , the Newton-Leibniz formula ( ) gives   Now let . Apply with Then and Therefore Since , this becomes   Starting from and applying the recurrence successively for , we obtain Rearranging gives the desired formula.      Suppose has derivatives of all orders on an interval containing and . If there exists a constant such that for every and every between and , then the Taylor series of at converges to .    By Taylor's theorem, for some point between and . Hence By , . Therefore .      Assume the standard calculus facts that and that is continuous. Fix , and choose a closed interval containing both and . By the Extreme Value Theorem ( ), is bounded there by some constant . Since every derivative of is again , the previous corollary gives Because was arbitrary, the exponential function is analytic on all of .     Binomial Series   For each , where     We omit the proof. The ratio test shows that the series has radius of convergence , and term-by-term differentiation leads to a differential equation satisfied by both sides.      Taking gives So is analytic at .    "
},
{
  "id": "sec-taylors-theorem-3",
  "level": "2",
  "url": "sec-taylors-theorem.html#sec-taylors-theorem-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-th Taylor polynomial "
},
{
  "id": "sec-taylors-theorem-4",
  "level": "2",
  "url": "sec-taylors-theorem.html#sec-taylors-theorem-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zero of multiplicity "
},
{
  "id": "lem-rolle-zero-multiplicity",
  "level": "2",
  "url": "sec-taylors-theorem.html#lem-rolle-zero-multiplicity",
  "type": "Lemma",
  "number": "6.4.1",
  "title": "",
  "body": "  Let have derivatives on an interval . Suppose is a zero of multiplicity at least of , and suppose is another zero of . Then there exists a point strictly between and such that     Since , Rolle's theorem ( ) gives a point between and such that . Because is still a zero of multiplicity at least for , Rolle's theorem applied to on the interval with endpoints and gives a point between them such that .  Repeating this argument yields points , each lying strictly between and , with Taking completes the proof.   "
},
{
  "id": "thm-taylor-lagrange",
  "level": "2",
  "url": "sec-taylors-theorem.html#thm-taylor-lagrange",
  "type": "Theorem",
  "number": "6.4.2",
  "title": "Taylor’s Theorem.",
  "body": " Taylor's Theorem   Suppose has derivatives up to order on an open interval containing and . Then there exists a point between and such that   The final term is called the Lagrange remainder Lagrange remainder .    The case is immediate, so assume . Choose a constant so that the function satisfies . Since matches the first derivatives of at , the point is a zero of multiplicity at least of .  By , there exists a point between and such that . But the polynomial has zero -st derivative, so Evaluating at gives hence Substituting this value of into the definition of and using yields the formula.   "
},
{
  "id": "prop-integration-by-parts-special-case",
  "level": "2",
  "url": "sec-taylors-theorem.html#prop-integration-by-parts-special-case",
  "type": "Proposition",
  "number": "6.4.3",
  "title": "Integration by Parts.",
  "body": " Integration by Parts   Assume the basic properties of the definite integral. If are continuously differentiable, then     By the product rule ( ), Integrating both sides from to and applying to the function , we get Rearranging gives the result.   "
},
{
  "id": "thm-taylor-integral-remainder",
  "level": "2",
  "url": "sec-taylors-theorem.html#thm-taylor-integral-remainder",
  "type": "Theorem",
  "number": "6.4.4",
  "title": "Taylor’s Theorem with Integral Remainder.",
  "body": " Taylor's Theorem with Integral Remainder   Assume the basic properties of the definite integral. Suppose , where is a closed interval with endpoints and . Then   The final term is called the integral form of the remainder integral remainder .    If , the formula is immediate. If , then the same argument applied on the interval with endpoints and gives the result after reversing the limits of integration. So it is enough to treat the case .  For each , define   When , the Newton-Leibniz formula ( ) gives   Now let . Apply with Then and Therefore Since , this becomes   Starting from and applying the recurrence successively for , we obtain Rearranging gives the desired formula.   "
},
{
  "id": "cor-taylor-remainder-goes-to-zero",
  "level": "2",
  "url": "sec-taylors-theorem.html#cor-taylor-remainder-goes-to-zero",
  "type": "Corollary",
  "number": "6.4.5",
  "title": "",
  "body": "  Suppose has derivatives of all orders on an interval containing and . If there exists a constant such that for every and every between and , then the Taylor series of at converges to .    By Taylor's theorem, for some point between and . Hence By , . Therefore .   "
},
{
  "id": "eg-taylor-exp",
  "level": "2",
  "url": "sec-taylors-theorem.html#eg-taylor-exp",
  "type": "Example",
  "number": "6.4.6",
  "title": "",
  "body": "  Assume the standard calculus facts that and that is continuous. Fix , and choose a closed interval containing both and . By the Extreme Value Theorem ( ), is bounded there by some constant . Since every derivative of is again , the previous corollary gives Because was arbitrary, the exponential function is analytic on all of .   "
},
{
  "id": "thm-binomial-series",
  "level": "2",
  "url": "sec-taylors-theorem.html#thm-binomial-series",
  "type": "Theorem",
  "number": "6.4.7",
  "title": "Binomial Series.",
  "body": " Binomial Series   For each , where     We omit the proof. The ratio test shows that the series has radius of convergence , and term-by-term differentiation leads to a differential equation satisfied by both sides.   "
},
{
  "id": "eg-binomial-series-sqrt",
  "level": "2",
  "url": "sec-taylors-theorem.html#eg-binomial-series-sqrt",
  "type": "Example",
  "number": "6.4.8",
  "title": "",
  "body": "  Taking gives So is analytic at .   "
},
{
  "id": "ex-ch6",
  "level": "1",
  "url": "ex-ch6.html",
  "type": "Exercises",
  "number": "6.5",
  "title": "Exercises",
  "body": " Exercises    Find the radius of convergence and the interval of convergence of each power series.   ,  ,  .       Find the radius of convergence and the interval of convergence of       Use the geometric series and term-by-term differentiation to compute       Starting from the geometric series, derive the power series for and about . In each case, determine the radius of convergence.      Let Show that every derivative of at is equal to . Conclude that is not analytic at .      Let , the third Taylor polynomial of at .   Compute in the form given by Taylor's theorem.  Use this to show that .       Use the binomial series to write down the first four nonzero terms of the power series for about . What is the radius of convergence?    "
},
{
  "id": "ex-power-series-radius-basic",
  "level": "2",
  "url": "ex-ch6.html#ex-power-series-radius-basic",
  "type": "Exercise",
  "number": "6.5.1",
  "title": "",
  "body": "  Find the radius of convergence and the interval of convergence of each power series.   ,  ,  .    "
},
{
  "id": "ex-power-series-shifted-center",
  "level": "2",
  "url": "ex-ch6.html#ex-power-series-shifted-center",
  "type": "Exercise",
  "number": "6.5.2",
  "title": "",
  "body": "  Find the radius of convergence and the interval of convergence of    "
},
{
  "id": "ex-power-series-sum-n-over-three-power-n",
  "level": "2",
  "url": "ex-ch6.html#ex-power-series-sum-n-over-three-power-n",
  "type": "Exercise",
  "number": "6.5.3",
  "title": "",
  "body": "  Use the geometric series and term-by-term differentiation to compute    "
},
{
  "id": "ex-power-series-log-and-arctan",
  "level": "2",
  "url": "ex-ch6.html#ex-power-series-log-and-arctan",
  "type": "Exercise",
  "number": "6.5.4",
  "title": "",
  "body": "  Starting from the geometric series, derive the power series for and about . In each case, determine the radius of convergence.   "
},
{
  "id": "ex-power-series-smooth-not-analytic",
  "level": "2",
  "url": "ex-ch6.html#ex-power-series-smooth-not-analytic",
  "type": "Exercise",
  "number": "6.5.5",
  "title": "",
  "body": "  Let Show that every derivative of at is equal to . Conclude that is not analytic at .   "
},
{
  "id": "ex-power-series-taylor-ln-error",
  "level": "2",
  "url": "ex-ch6.html#ex-power-series-taylor-ln-error",
  "type": "Exercise",
  "number": "6.5.6",
  "title": "",
  "body": "  Let , the third Taylor polynomial of at .   Compute in the form given by Taylor's theorem.  Use this to show that .    "
},
{
  "id": "ex-power-series-binomial-sqrt",
  "level": "2",
  "url": "ex-ch6.html#ex-power-series-binomial-sqrt",
  "type": "Exercise",
  "number": "6.5.7",
  "title": "",
  "body": "  Use the binomial series to write down the first four nonzero terms of the power series for about . What is the radius of convergence?   "
},
{
  "id": "sec-definitions-and-examples-of-integration",
  "level": "1",
  "url": "sec-definitions-and-examples-of-integration.html",
  "type": "Section",
  "number": "7.1",
  "title": "Definitions and Examples",
  "body": " Definitions and Examples   We define the Riemann integral by Darboux's approach. The main objects are lower and upper sums attached to partitions of a closed bounded interval. These sums give step-function approximations to a bounded function from below and above, and the function is integrable precisely when the gap between these approximations can be made arbitrarily small.    Partitions and Darboux Sums  A partition partition of an interval of a closed bounded interval is a finite subset of containing both endpoints. We list a partition in increasing order: For such a partition, we write   For now, we write rather than . At this stage there is no risk of confusion, because the interval and the function being integrated are both fixed. Only later, when we discuss change of variables, will it become useful to display the variable of integration explicitly.  Now let be bounded, and let be a partition of . For each subinterval , define The numbers are called the lower Darboux sum Darboux sum lower and upper Darboux sum Darboux sum upper of with respect to .    Let on , and let . Since is increasing on , the infimum on each subinterval occurs at the left endpoint and the supremum occurs at the right endpoint. Therefore while    The lower Darboux sum, the upper Darboux sum, and the curve for the partition .   A parabola on the interval from zero to one together with two overlapping families of rectangles for the lower and upper Darboux sums based on the partition at one third and two thirds.         If is constant on , then for every partition we have for every . Hence So lower and upper sums already agree for every partition.      Upper and Lower Integrals  Since is bounded, there exist real numbers such that Therefore, for every partition , Thus the set of all lower sums is bounded above, and the set of all upper sums is bounded below.  By the , the least upper bound of the set of lower sums exists, and likewise the greatest lower bound of the set of upper sums exists. We define the lower integral integral lower and upper integral integral upper of by and   If and are partitions of , we say that is a refinement partition refinement of if .    Let be bounded. If is a refinement of , then     It is enough to prove the result in the special case where is obtained from by adjoining a single point with for some . All terms in the upper sum remain unchanged except the term corresponding to the interval .  Let be the supremum of on , and let be the suprema on and , respectively. Since these two intervals are contained in , we have and . Therefore So .  The proof that is analogous, using infima instead of suprema. The middle inequality is immediate.      For every partition of ,     Let and be any two partitions. Then is a common refinement of both. By , Since is arbitrary, is a lower bound for the set of upper sums. Hence . Therefore every upper integral is an upper bound for the set of lower sums, so . The remaining inequalities follow directly from the definitions of supremum and infimum.      Define the Dirichlet function by Then   Indeed, by , every nondegenerate subinterval of contains a rational number. If is such a subinterval, then is also nondegenerate, so again by there is some with . Then is irrational and lies in . Thus on each subinterval of any partition the infimum is and the supremum is . Hence every lower sum is and every upper sum is .      Riemann Integrability  A bounded function is Riemann integrable Riemann integrable function if its lower and upper integrals are equal: The common value is called the Riemann integral Riemann integral value of of on , and is denoted by We write for the set of all Riemann integrable functions on .   Integrability Criterion   A bounded function is Riemann integrable if and only if for every there exists a partition of such that     First assume that for every there exists a partition with . By , Since the right-hand side can be made arbitrarily small, the difference of the upper and lower integrals must be . Hence is integrable.  Conversely, suppose is integrable, and let . Given , choose partitions and such that Let . Then refines both and , so Therefore .      The function is Riemann integrable on . For each , let Since is increasing, and Hence By the , the function is integrable on . Also, for every , so letting gives     Finally, if is integrable on , we extend the notation by setting    "
},
{
  "id": "subsec-partitions-and-darboux-sums-2",
  "level": "2",
  "url": "sec-definitions-and-examples-of-integration.html#subsec-partitions-and-darboux-sums-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partition "
},
{
  "id": "subsec-partitions-and-darboux-sums-4",
  "level": "2",
  "url": "sec-definitions-and-examples-of-integration.html#subsec-partitions-and-darboux-sums-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lower Darboux sum upper Darboux sum "
},
{
  "id": "eg-darboux-sums-x-squared",
  "level": "2",
  "url": "sec-definitions-and-examples-of-integration.html#eg-darboux-sums-x-squared",
  "type": "Example",
  "number": "7.1.1",
  "title": "",
  "body": "  Let on , and let . Since is increasing on , the infimum on each subinterval occurs at the left endpoint and the supremum occurs at the right endpoint. Therefore while    The lower Darboux sum, the upper Darboux sum, and the curve for the partition .   A parabola on the interval from zero to one together with two overlapping families of rectangles for the lower and upper Darboux sums based on the partition at one third and two thirds.      "
},
{
  "id": "eg-constant-function-darboux-sums",
  "level": "2",
  "url": "sec-definitions-and-examples-of-integration.html#eg-constant-function-darboux-sums",
  "type": "Example",
  "number": "7.1.3",
  "title": "",
  "body": "  If is constant on , then for every partition we have for every . Hence So lower and upper sums already agree for every partition.   "
},
{
  "id": "subsec-upper-and-lower-integrals-3",
  "level": "2",
  "url": "sec-definitions-and-examples-of-integration.html#subsec-upper-and-lower-integrals-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lower integral upper integral "
},
{
  "id": "subsec-upper-and-lower-integrals-4",
  "level": "2",
  "url": "sec-definitions-and-examples-of-integration.html#subsec-upper-and-lower-integrals-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "refinement "
},
{
  "id": "prop-refinement-monotonicity-darboux-sums",
  "level": "2",
  "url": "sec-definitions-and-examples-of-integration.html#prop-refinement-monotonicity-darboux-sums",
  "type": "Proposition",
  "number": "7.1.4",
  "title": "",
  "body": "  Let be bounded. If is a refinement of , then     It is enough to prove the result in the special case where is obtained from by adjoining a single point with for some . All terms in the upper sum remain unchanged except the term corresponding to the interval .  Let be the supremum of on , and let be the suprema on and , respectively. Since these two intervals are contained in , we have and . Therefore So .  The proof that is analogous, using infima instead of suprema. The middle inequality is immediate.   "
},
{
  "id": "cor-lower-upper-integral-between-sums",
  "level": "2",
  "url": "sec-definitions-and-examples-of-integration.html#cor-lower-upper-integral-between-sums",
  "type": "Corollary",
  "number": "7.1.5",
  "title": "",
  "body": "  For every partition of ,     Let and be any two partitions. Then is a common refinement of both. By , Since is arbitrary, is a lower bound for the set of upper sums. Hence . Therefore every upper integral is an upper bound for the set of lower sums, so . The remaining inequalities follow directly from the definitions of supremum and infimum.   "
},
{
  "id": "eg-dirichlet-upper-lower-integrals",
  "level": "2",
  "url": "sec-definitions-and-examples-of-integration.html#eg-dirichlet-upper-lower-integrals",
  "type": "Example",
  "number": "7.1.6",
  "title": "",
  "body": "  Define the Dirichlet function by Then   Indeed, by , every nondegenerate subinterval of contains a rational number. If is such a subinterval, then is also nondegenerate, so again by there is some with . Then is irrational and lies in . Thus on each subinterval of any partition the infimum is and the supremum is . Hence every lower sum is and every upper sum is .   "
},
{
  "id": "subsec-riemann-integrability-darboux-2",
  "level": "2",
  "url": "sec-definitions-and-examples-of-integration.html#subsec-riemann-integrability-darboux-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Riemann integrable Riemann integral "
},
{
  "id": "prop-integrability-criterion-darboux",
  "level": "2",
  "url": "sec-definitions-and-examples-of-integration.html#prop-integrability-criterion-darboux",
  "type": "Proposition",
  "number": "7.1.7",
  "title": "Integrability Criterion.",
  "body": " Integrability Criterion   A bounded function is Riemann integrable if and only if for every there exists a partition of such that     First assume that for every there exists a partition with . By , Since the right-hand side can be made arbitrarily small, the difference of the upper and lower integrals must be . Hence is integrable.  Conversely, suppose is integrable, and let . Given , choose partitions and such that Let . Then refines both and , so Therefore .   "
},
{
  "id": "eg-x-integrable-on-unit-interval",
  "level": "2",
  "url": "sec-definitions-and-examples-of-integration.html#eg-x-integrable-on-unit-interval",
  "type": "Example",
  "number": "7.1.8",
  "title": "",
  "body": "  The function is Riemann integrable on . For each , let Since is increasing, and Hence By the , the function is integrable on . Also, for every , so letting gives    "
},
{
  "id": "sec-properties-of-riemann-integrals",
  "level": "1",
  "url": "sec-properties-of-riemann-integrals.html",
  "type": "Section",
  "number": "7.2",
  "title": "Properties of Riemann Integrals",
  "body": " Properties of Riemann Integrals   The Darboux definition gives a practical criterion for integrability: a bounded function is integrable exactly when some partition makes the upper and lower sums arbitrarily close. We now use this criterion to prove the basic algebraic and order properties of the integral, and then to identify some important classes of integrable functions.    Basic Properties   Basic Properties of the Integral   Let , and let .    The functions and belong to , and     If for every , then     If , then the restrictions of to and are integrable, and     If for every , then       We begin with part (1). Let and , and fix . By the , there are partitions and of such that Let . Since refinement decreases upper sums and increases lower sums,   For each subinterval of , let and be the infima and suprema of and on . Then Summing over the partition gives Hence So is integrable.  Also, because lies between and , and similarly for , we have Since is arbitrary, .  For scalar multiples, let be any partition, and let be the infima and suprema of on . If , then the infimum and supremum of on the same interval are and . If , they are and . In either case, Hence is integrable. When , and the same squeeze argument as above gives . When , the same conclusion follows from the identities   For part (2), if on , then on every subinterval of every partition the infimum and supremum of are at most the corresponding infimum and supremum of . Thus Since and for every partition , it follows that .  For part (3), let and fix . By the , there is a partition of such that . If , adjoin to obtain a refinement; the gap does not increase. Write and for the induced partitions of and . Then so Since each summand is nonnegative, both are less than . Therefore the restrictions of to and are integrable.  Let and . Because and lie between the corresponding lower and upper sums, we obtain Hence .  Finally, for part (4), the hypothesis gives on . By part (2), Since constant functions are integrable and we conclude that Therefore .      Step Functions  A function is a step function step function if there is a partition of and real numbers such that where   If is any subinterval of with endpoints , then the indicator function is Riemann integrable and Indeed, let . One may choose a partition that isolates the endpoints of inside two subintervals of lengths less than each. Outside those short endpoint intervals the function is constant, so the upper and lower sums differ by at most . Thus is integrable, and its integral is the length of .    Every step function on is Riemann integrable. More precisely, if for a partition and the associated subintervals , then     Each indicator function is integrable, with . Therefore part (1) of shows that any linear combination is integrable and that       Continuous Functions of Integrable Functions   Continuous Compositions Preserve Integrability   Suppose , let satisfy , and let be continuous. Then .    A proof of this can be found in . The same result holds for the more general Riemann-Stieltjes integral.  The order of composition matters. There exist a Riemann integrable function and a continuous function such that is not Riemann integrable; see .    If , then .    By the , the functions , , and are integrable. The function is continuous on every closed bounded interval, so shows that , , and are integrable. Since another application of gives .      If , then . Moreover,     The function is continuous, so shows that is integrable.  Since on , part (2) of gives Part (1) of the same theorem implies . Therefore and hence .      Large Classes of Integrable Functions  For , the uniform -partition uniform partition of is the partition where When the interval is clear from the context, we simply write .   Continuous Functions Are Integrable   Every continuous function on a closed bounded interval is Riemann integrable.    Let be continuous, and let . By , is uniformly continuous on . Therefore there exists such that whenever and .  Choose so large that , and let be the uniform -partition of . For each subinterval , the restriction of to is continuous, so the gives points such that where and are the supremum and infimum of on .  Since , we have Therefore By the , is integrable.     Monotone Functions Are Integrable   Every monotone function on a closed bounded interval is Riemann integrable.    First suppose that is increasing on . Let be the uniform -partition of . Then on each subinterval , Hence The right-hand side tends to as , so the shows that is integrable.  If is decreasing, then is increasing, so the argument above shows that is integrable. By part (1) of , is integrable as well.      The Thomae function Thomae function  is defined by This function is integrable on , with , but it is neither continuous nor monotone on any nondegenerate subinterval of .   A plot of the Thomae function on , showing sample values at rational points with denominator at most .   A point plot of the Thomae function on the interval from zero to one, with higher points at rationals having small denominators and lower points at rationals with larger denominators.     By and the argument from , every nondegenerate subinterval of contains both rational and irrational numbers. Thus, if with irrational and rational, then so cannot be increasing or decreasing on that interval. Also, if , choose irrational numbers . Then , while , so is not continuous at . Since rationals are dense, is not continuous on any nondegenerate subinterval.  Every nondegenerate subinterval of contains irrational numbers, so the infimum of on each such interval is . Hence every lower sum of is .  To control the upper sums, fix and let If , then in lowest terms with . Therefore is finite. Choose pairwise disjoint closed intervals , one for each , such that and the sum of their lengths is less than . Let be a partition containing all endpoints of these intervals.  Any subinterval of that is disjoint from contains no point of , so the supremum of there is less than . On the other subintervals, the supremum is at most . It follows that Since is arbitrary, the shows that is integrable. Because every lower sum is , we have .     "
},
{
  "id": "thm-basic-properties-riemann-integral",
  "level": "2",
  "url": "sec-properties-of-riemann-integrals.html#thm-basic-properties-riemann-integral",
  "type": "Theorem",
  "number": "7.2.1",
  "title": "Basic Properties of the Integral.",
  "body": " Basic Properties of the Integral   Let , and let .    The functions and belong to , and     If for every , then     If , then the restrictions of to and are integrable, and     If for every , then       We begin with part (1). Let and , and fix . By the , there are partitions and of such that Let . Since refinement decreases upper sums and increases lower sums,   For each subinterval of , let and be the infima and suprema of and on . Then Summing over the partition gives Hence So is integrable.  Also, because lies between and , and similarly for , we have Since is arbitrary, .  For scalar multiples, let be any partition, and let be the infima and suprema of on . If , then the infimum and supremum of on the same interval are and . If , they are and . In either case, Hence is integrable. When , and the same squeeze argument as above gives . When , the same conclusion follows from the identities   For part (2), if on , then on every subinterval of every partition the infimum and supremum of are at most the corresponding infimum and supremum of . Thus Since and for every partition , it follows that .  For part (3), let and fix . By the , there is a partition of such that . If , adjoin to obtain a refinement; the gap does not increase. Write and for the induced partitions of and . Then so Since each summand is nonnegative, both are less than . Therefore the restrictions of to and are integrable.  Let and . Because and lie between the corresponding lower and upper sums, we obtain Hence .  Finally, for part (4), the hypothesis gives on . By part (2), Since constant functions are integrable and we conclude that Therefore .   "
},
{
  "id": "subsec-step-functions-2",
  "level": "2",
  "url": "sec-properties-of-riemann-integrals.html#subsec-step-functions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "step function "
},
{
  "id": "prop-step-functions-integrable",
  "level": "2",
  "url": "sec-properties-of-riemann-integrals.html#prop-step-functions-integrable",
  "type": "Proposition",
  "number": "7.2.2",
  "title": "",
  "body": "  Every step function on is Riemann integrable. More precisely, if for a partition and the associated subintervals , then     Each indicator function is integrable, with . Therefore part (1) of shows that any linear combination is integrable and that    "
},
{
  "id": "thm-continuous-composition-preserves-integrability",
  "level": "2",
  "url": "sec-properties-of-riemann-integrals.html#thm-continuous-composition-preserves-integrability",
  "type": "Theorem",
  "number": "7.2.3",
  "title": "Continuous Compositions Preserve Integrability.",
  "body": " Continuous Compositions Preserve Integrability   Suppose , let satisfy , and let be continuous. Then .   "
},
{
  "id": "prop-product-of-integrable-functions",
  "level": "2",
  "url": "sec-properties-of-riemann-integrals.html#prop-product-of-integrable-functions",
  "type": "Proposition",
  "number": "7.2.4",
  "title": "",
  "body": "  If , then .    By the , the functions , , and are integrable. The function is continuous on every closed bounded interval, so shows that , , and are integrable. Since another application of gives .   "
},
{
  "id": "prop-absolute-value-integrable",
  "level": "2",
  "url": "sec-properties-of-riemann-integrals.html#prop-absolute-value-integrable",
  "type": "Proposition",
  "number": "7.2.5",
  "title": "",
  "body": "  If , then . Moreover,     The function is continuous, so shows that is integrable.  Since on , part (2) of gives Part (1) of the same theorem implies . Therefore and hence .   "
},
{
  "id": "subsec-large-classes-of-integrable-functions-2",
  "level": "2",
  "url": "sec-properties-of-riemann-integrals.html#subsec-large-classes-of-integrable-functions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "uniform -partition "
},
{
  "id": "thm-continuous-function-integrable",
  "level": "2",
  "url": "sec-properties-of-riemann-integrals.html#thm-continuous-function-integrable",
  "type": "Theorem",
  "number": "7.2.6",
  "title": "Continuous Functions Are Integrable.",
  "body": " Continuous Functions Are Integrable   Every continuous function on a closed bounded interval is Riemann integrable.    Let be continuous, and let . By , is uniformly continuous on . Therefore there exists such that whenever and .  Choose so large that , and let be the uniform -partition of . For each subinterval , the restriction of to is continuous, so the gives points such that where and are the supremum and infimum of on .  Since , we have Therefore By the , is integrable.   "
},
{
  "id": "thm-monotone-function-integrable",
  "level": "2",
  "url": "sec-properties-of-riemann-integrals.html#thm-monotone-function-integrable",
  "type": "Theorem",
  "number": "7.2.7",
  "title": "Monotone Functions Are Integrable.",
  "body": " Monotone Functions Are Integrable   Every monotone function on a closed bounded interval is Riemann integrable.    First suppose that is increasing on . Let be the uniform -partition of . Then on each subinterval , Hence The right-hand side tends to as , so the shows that is integrable.  If is decreasing, then is increasing, so the argument above shows that is integrable. By part (1) of , is integrable as well.   "
},
{
  "id": "eg-thomae-function",
  "level": "2",
  "url": "sec-properties-of-riemann-integrals.html#eg-thomae-function",
  "type": "Example",
  "number": "7.2.8",
  "title": "",
  "body": "  The Thomae function Thomae function  is defined by This function is integrable on , with , but it is neither continuous nor monotone on any nondegenerate subinterval of .   A plot of the Thomae function on , showing sample values at rational points with denominator at most .   A point plot of the Thomae function on the interval from zero to one, with higher points at rationals having small denominators and lower points at rationals with larger denominators.     By and the argument from , every nondegenerate subinterval of contains both rational and irrational numbers. Thus, if with irrational and rational, then so cannot be increasing or decreasing on that interval. Also, if , choose irrational numbers . Then , while , so is not continuous at . Since rationals are dense, is not continuous on any nondegenerate subinterval.  Every nondegenerate subinterval of contains irrational numbers, so the infimum of on each such interval is . Hence every lower sum of is .  To control the upper sums, fix and let If , then in lowest terms with . Therefore is finite. Choose pairwise disjoint closed intervals , one for each , such that and the sum of their lengths is less than . Let be a partition containing all endpoints of these intervals.  Any subinterval of that is disjoint from contains no point of , so the supremum of there is less than . On the other subintervals, the supremum is at most . It follows that Since is arbitrary, the shows that is integrable. Because every lower sum is , we have .   "
},
{
  "id": "sec-fundamental-theorem-of-calculus",
  "level": "1",
  "url": "sec-fundamental-theorem-of-calculus.html",
  "type": "Section",
  "number": "7.3",
  "title": "The Fundamental Theorem of Calculus",
  "body": " The Fundamental Theorem of Calculus   We now return to the theme announced at the end of : differentiation and integration are inverse processes, at least under suitable hypotheses. We present the theorem in two standard forms.    Indefinite Integrals  Let . For each , the function is called the indefinite integral integral indefinite of with base point integral base point  .   Fundamental Theorem of Calculus (Second Form)   Let , and define Then is Lipschitz continuous on . Moreover, if is continuous at , then is differentiable at and     Since is integrable on , it is bounded. Choose such that for every . Let . If , then part (3) of gives Therefore, by part (4) of the same theorem, The same inequality is trivial if , and it follows by symmetry when . Thus is Lipschitz continuous on .  Now suppose that is continuous at . Let Then for every . We will prove that is continuous at . Let . There exists such that whenever and . If with , then Thus as , so is continuous at . By Carathéodory's Criterion ( ), it follows that is differentiable at and .      If , then the indefinite integral is an antiderivative, or primitive primitive , of on .    By , every continuous function on is Riemann integrable. Therefore applies at every point of and yields .    In general, however, an indefinite integral need not be differentiable at every point, and even when it is differentiable at a point, its derivative there need not equal the original integrand.    Consider the signum function Since this is a step function, it is integrable on . Its indefinite integral with base point is The function is not differentiable at , so the indefinite integral of an integrable function need not be differentiable everywhere.      Let be the Thomae function from . Since and , part (2) of implies that for every . Hence the function is identically zero on . Therefore for every , while for every rational . So it can happen that the indefinite integral is differentiable at a point but its derivative does not equal the integrand there.      The Two Forms of the Theorem   Fundamental Theorem of Calculus (First Form)   Suppose is differentiable on and that . Then     Since differentiability implies continuity, is continuous on . Let be any partition of , and let and be the infimum and supremum of on . By the Mean Value Theorem ( ), for each there exists such that Hence   Summing over gives The sum in the middle telescopes, so   Since was arbitrary, we obtain Because is integrable, the upper and lower integrals are equal. Therefore       Let be continuous, and let be an antiderivative of on . Then     By , the function is Riemann integrable on . Since , the conclusion follows from .    When is continuous, the first form may also be recovered from the second form. Indeed, if then shows that . Hence on , so yields . Evaluating at gives .    The Thomae function is integrable on , but it has no primitive on . Indeed, if were a primitive of , then by , for every . Thus would be constant, which is impossible because then everywhere, while for rational .      Let Then is continuous on , and for , This derivative is unbounded on , so it is not Riemann integrable no matter how one defines . Thus does not apply.      Define on . Then is differentiable on , and The derivative is bounded on and is continuous except at , so is integrable. By ,       Let Then is differentiable on , and The term is unbounded near , so is not Riemann integrable on . Again, does not apply.    For a much broader characterization of Riemann integrability, see . In particular, explains why bounded functions such as the Thomae function are integrable even though they are not continuous everywhere.   "
},
{
  "id": "subsec-indefinite-integrals-2",
  "level": "2",
  "url": "sec-fundamental-theorem-of-calculus.html#subsec-indefinite-integrals-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "indefinite integral base point "
},
{
  "id": "thm-ftc-second-form",
  "level": "2",
  "url": "sec-fundamental-theorem-of-calculus.html#thm-ftc-second-form",
  "type": "Theorem",
  "number": "7.3.1",
  "title": "Fundamental Theorem of Calculus (Second Form).",
  "body": " Fundamental Theorem of Calculus (Second Form)   Let , and define Then is Lipschitz continuous on . Moreover, if is continuous at , then is differentiable at and     Since is integrable on , it is bounded. Choose such that for every . Let . If , then part (3) of gives Therefore, by part (4) of the same theorem, The same inequality is trivial if , and it follows by symmetry when . Thus is Lipschitz continuous on .  Now suppose that is continuous at . Let Then for every . We will prove that is continuous at . Let . There exists such that whenever and . If with , then Thus as , so is continuous at . By Carathéodory's Criterion ( ), it follows that is differentiable at and .   "
},
{
  "id": "cor-continuous-functions-have-primitives",
  "level": "2",
  "url": "sec-fundamental-theorem-of-calculus.html#cor-continuous-functions-have-primitives",
  "type": "Corollary",
  "number": "7.3.2",
  "title": "",
  "body": "  If , then the indefinite integral is an antiderivative, or primitive primitive , of on .    By , every continuous function on is Riemann integrable. Therefore applies at every point of and yields .   "
},
{
  "id": "eg-ftc-signum-absolute-value",
  "level": "2",
  "url": "sec-fundamental-theorem-of-calculus.html#eg-ftc-signum-absolute-value",
  "type": "Example",
  "number": "7.3.3",
  "title": "",
  "body": "  Consider the signum function Since this is a step function, it is integrable on . Its indefinite integral with base point is The function is not differentiable at , so the indefinite integral of an integrable function need not be differentiable everywhere.   "
},
{
  "id": "eg-ftc-thomae-zero-primitive",
  "level": "2",
  "url": "sec-fundamental-theorem-of-calculus.html#eg-ftc-thomae-zero-primitive",
  "type": "Example",
  "number": "7.3.4",
  "title": "",
  "body": "  Let be the Thomae function from . Since and , part (2) of implies that for every . Hence the function is identically zero on . Therefore for every , while for every rational . So it can happen that the indefinite integral is differentiable at a point but its derivative does not equal the integrand there.   "
},
{
  "id": "thm-ftc-first-form",
  "level": "2",
  "url": "sec-fundamental-theorem-of-calculus.html#thm-ftc-first-form",
  "type": "Theorem",
  "number": "7.3.5",
  "title": "Fundamental Theorem of Calculus (First Form).",
  "body": " Fundamental Theorem of Calculus (First Form)   Suppose is differentiable on and that . Then     Since differentiability implies continuity, is continuous on . Let be any partition of , and let and be the infimum and supremum of on . By the Mean Value Theorem ( ), for each there exists such that Hence   Summing over gives The sum in the middle telescopes, so   Since was arbitrary, we obtain Because is integrable, the upper and lower integrals are equal. Therefore    "
},
{
  "id": "cor-newton-leibniz-ftc",
  "level": "2",
  "url": "sec-fundamental-theorem-of-calculus.html#cor-newton-leibniz-ftc",
  "type": "Corollary",
  "number": "7.3.6",
  "title": "",
  "body": "  Let be continuous, and let be an antiderivative of on . Then     By , the function is Riemann integrable on . Since , the conclusion follows from .   "
},
{
  "id": "eg-thomae-no-primitive",
  "level": "2",
  "url": "sec-fundamental-theorem-of-calculus.html#eg-thomae-no-primitive",
  "type": "Example",
  "number": "7.3.7",
  "title": "",
  "body": "  The Thomae function is integrable on , but it has no primitive on . Indeed, if were a primitive of , then by , for every . Thus would be constant, which is impossible because then everywhere, while for rational .   "
},
{
  "id": "eg-ftc-sqrt-not-riemann",
  "level": "2",
  "url": "sec-fundamental-theorem-of-calculus.html#eg-ftc-sqrt-not-riemann",
  "type": "Example",
  "number": "7.3.8",
  "title": "",
  "body": "  Let Then is continuous on , and for , This derivative is unbounded on , so it is not Riemann integrable no matter how one defines . Thus does not apply.   "
},
{
  "id": "eg-ftc-bounded-oscillatory-derivative",
  "level": "2",
  "url": "sec-fundamental-theorem-of-calculus.html#eg-ftc-bounded-oscillatory-derivative",
  "type": "Example",
  "number": "7.3.9",
  "title": "",
  "body": "  Define on . Then is differentiable on , and The derivative is bounded on and is continuous except at , so is integrable. By ,    "
},
{
  "id": "eg-ftc-unbounded-oscillatory-derivative",
  "level": "2",
  "url": "sec-fundamental-theorem-of-calculus.html#eg-ftc-unbounded-oscillatory-derivative",
  "type": "Example",
  "number": "7.3.10",
  "title": "",
  "body": "  Let Then is differentiable on , and The term is unbounded near , so is not Riemann integrable on . Again, does not apply.   "
},
{
  "id": "sec-integration-by-parts-and-change-of-variables",
  "level": "1",
  "url": "sec-integration-by-parts-and-change-of-variables.html",
  "type": "Section",
  "number": "7.4",
  "title": "Integration by Parts and Change of Variables",
  "body": " Integration by Parts and Change of Variables   The Fundamental Theorem of Calculus turns differentiation rules into integration formulas. Two of the most useful are integration by parts, which comes from the product rule, and change of variables, which comes from the chain rule.    Integration by Parts   Integration by Parts   Suppose and are differentiable on and that and are both integrable on . Then     Since differentiability implies continuity, both and are continuous on . Hence shows that . Because and are integrable by assumption, implies that and are integrable.  By the product rule ( ), Therefore is integrable, by part (1) of . Applying to , we get Rearranging yields the formula.      Change of Variables   Change of Variables   Let , and let be continuous on . Then     Since is continuous on , the second form of the Fundamental Theorem of Calculus ( ) gives a function such that for every .  Define on . By the chain rule, Because and are continuous on , and is continuous on , the function is continuous on . Hence is continuous, in particular integrable, on .  Applying to , we obtain Since , the right-hand side is This proves the formula.      Consider Let and . Then Therefore the change-of-variables theorem gives      "
},
{
  "id": "prop-integration-by-parts",
  "level": "2",
  "url": "sec-integration-by-parts-and-change-of-variables.html#prop-integration-by-parts",
  "type": "Proposition",
  "number": "7.4.1",
  "title": "Integration by Parts.",
  "body": " Integration by Parts   Suppose and are differentiable on and that and are both integrable on . Then     Since differentiability implies continuity, both and are continuous on . Hence shows that . Because and are integrable by assumption, implies that and are integrable.  By the product rule ( ), Therefore is integrable, by part (1) of . Applying to , we get Rearranging yields the formula.   "
},
{
  "id": "thm-change-of-variables",
  "level": "2",
  "url": "sec-integration-by-parts-and-change-of-variables.html#thm-change-of-variables",
  "type": "Theorem",
  "number": "7.4.2",
  "title": "Change of Variables.",
  "body": " Change of Variables   Let , and let be continuous on . Then     Since is continuous on , the second form of the Fundamental Theorem of Calculus ( ) gives a function such that for every .  Define on . By the chain rule, Because and are continuous on , and is continuous on , the function is continuous on . Hence is continuous, in particular integrable, on .  Applying to , we obtain Since , the right-hand side is This proves the formula.   "
},
{
  "id": "eg-change-of-variables-x-over-one-plus-xsq",
  "level": "2",
  "url": "sec-integration-by-parts-and-change-of-variables.html#eg-change-of-variables-x-over-one-plus-xsq",
  "type": "Example",
  "number": "7.4.3",
  "title": "",
  "body": "  Consider Let and . Then Therefore the change-of-variables theorem gives    "
},
{
  "id": "ex-ch7",
  "level": "1",
  "url": "ex-ch7.html",
  "type": "Exercises",
  "number": "7.5",
  "title": "Exercises",
  "body": " Exercises    Let on , and let .    Compute and .    Show that .    Conclude that is Riemann integrable on and that         Define by Show that is Riemann integrable and compute       Prove directly from the definitions that the Dirichlet function on is not Riemann integrable.      Show that the function is Riemann integrable on , and compute       Let be bounded, and suppose that except at finitely many points of . Prove that and that       Let be continuous and suppose that for every . Prove that if then for all .      Define by Find an explicit formula for and verify that for every .      Let on , and define Compute explicitly. Show that is continuous on , and explain why is not differentiable at .      Suppose is differentiable on , that , and that . Prove that       Use to prove by induction on that       Use to compute       Let , and let be continuous on . Prove that if , then       Let be bounded, and suppose that is continuous except at countably many points of . Use to prove that is Riemann integrable.      Let be the Thomae function on . Prove that the function is Riemann integrable and that     "
},
{
  "id": "ex-integration-x-squared-uniform-partitions",
  "level": "2",
  "url": "ex-ch7.html#ex-integration-x-squared-uniform-partitions",
  "type": "Exercise",
  "number": "7.5.1",
  "title": "",
  "body": "  Let on , and let .    Compute and .    Show that .    Conclude that is Riemann integrable on and that      "
},
{
  "id": "ex-integration-step-function-piecewise",
  "level": "2",
  "url": "ex-ch7.html#ex-integration-step-function-piecewise",
  "type": "Exercise",
  "number": "7.5.2",
  "title": "",
  "body": "  Define by Show that is Riemann integrable and compute    "
},
{
  "id": "ex-integration-dirichlet-not-integrable",
  "level": "2",
  "url": "ex-ch7.html#ex-integration-dirichlet-not-integrable",
  "type": "Exercise",
  "number": "7.5.3",
  "title": "",
  "body": "  Prove directly from the definitions that the Dirichlet function on is not Riemann integrable.   "
},
{
  "id": "ex-integration-floor-function",
  "level": "2",
  "url": "ex-ch7.html#ex-integration-floor-function",
  "type": "Exercise",
  "number": "7.5.4",
  "title": "",
  "body": "  Show that the function is Riemann integrable on , and compute    "
},
{
  "id": "ex-integration-finitely-many-nonzero-points",
  "level": "2",
  "url": "ex-ch7.html#ex-integration-finitely-many-nonzero-points",
  "type": "Exercise",
  "number": "7.5.5",
  "title": "",
  "body": "  Let be bounded, and suppose that except at finitely many points of . Prove that and that    "
},
{
  "id": "ex-integration-nonnegative-continuous-zero-integral",
  "level": "2",
  "url": "ex-ch7.html#ex-integration-nonnegative-continuous-zero-integral",
  "type": "Exercise",
  "number": "7.5.6",
  "title": "",
  "body": "  Let be continuous and suppose that for every . Prove that if then for all .   "
},
{
  "id": "ex-integration-indefinite-integral-absolute-value",
  "level": "2",
  "url": "ex-ch7.html#ex-integration-indefinite-integral-absolute-value",
  "type": "Exercise",
  "number": "7.5.7",
  "title": "",
  "body": "  Define by Find an explicit formula for and verify that for every .   "
},
{
  "id": "ex-integration-indefinite-integral-signum",
  "level": "2",
  "url": "ex-ch7.html#ex-integration-indefinite-integral-signum",
  "type": "Exercise",
  "number": "7.5.8",
  "title": "",
  "body": "  Let on , and define Compute explicitly. Show that is continuous on , and explain why is not differentiable at .   "
},
{
  "id": "ex-integration-by-parts-zero-boundary",
  "level": "2",
  "url": "ex-ch7.html#ex-integration-by-parts-zero-boundary",
  "type": "Exercise",
  "number": "7.5.9",
  "title": "",
  "body": "  Suppose is differentiable on , that , and that . Prove that    "
},
{
  "id": "ex-integration-by-parts-power-integral",
  "level": "2",
  "url": "ex-ch7.html#ex-integration-by-parts-power-integral",
  "type": "Exercise",
  "number": "7.5.10",
  "title": "",
  "body": "  Use to prove by induction on that    "
},
{
  "id": "ex-integration-change-of-variables-polynomial",
  "level": "2",
  "url": "ex-ch7.html#ex-integration-change-of-variables-polynomial",
  "type": "Exercise",
  "number": "7.5.11",
  "title": "",
  "body": "  Use to compute    "
},
{
  "id": "ex-integration-change-of-variables-closed-loop",
  "level": "2",
  "url": "ex-ch7.html#ex-integration-change-of-variables-closed-loop",
  "type": "Exercise",
  "number": "7.5.12",
  "title": "",
  "body": "  Let , and let be continuous on . Prove that if , then    "
},
{
  "id": "ex-integration-countably-many-discontinuities",
  "level": "2",
  "url": "ex-ch7.html#ex-integration-countably-many-discontinuities",
  "type": "Exercise",
  "number": "7.5.13",
  "title": "",
  "body": "  Let be bounded, and suppose that is continuous except at countably many points of . Use to prove that is Riemann integrable.   "
},
{
  "id": "ex-integration-thomae-weighted-zero",
  "level": "2",
  "url": "ex-ch7.html#ex-integration-thomae-weighted-zero",
  "type": "Exercise",
  "number": "7.5.14",
  "title": "",
  "body": "  Let be the Thomae function on . Prove that the function is Riemann integrable and that    "
},
{
  "id": "sec-sequences-and-series-of-functions",
  "level": "1",
  "url": "sec-sequences-and-series-of-functions.html",
  "type": "Section",
  "number": "8.1",
  "title": "Sequences and Series of Functions",
  "body": " Sequences and Series of Functions   Power series, Fourier series, and many approximation procedures are built from sequences of functions. The basic question is simple: if each function in the sequence is well behaved, what can be said about the limit? Pointwise convergence is often too weak, so the right notion for analysis is usually uniform convergence.   Let , and let be a sequence of functions from to . We say that converges pointwise convergence pointwise on to a function if for every the numerical sequence converges to .    Let on . Then for every , while for every . Thus the pointwise limit is Each is a polynomial, but the limit is not continuous at .    Pointwise convergence looks at one input at a time. The index that makes small is allowed to depend on . Uniform convergence removes that dependence.  We say that converges uniformly  convergence uniform on to if for every there exists such that     Uniform convergence implies pointwise convergence.    Fix . If uniformly on , then for every there exists such that for all and all . In particular, the same inequality holds when . Therefore .      The convergence in is not uniform on . Let be the pointwise limit. For we have , so , while Hence does not tend to . Therefore cannot converge uniformly to on .    If is bounded, its supremum norm norm supremum on is When the set is understood, we simply write .    Suppose and are bounded on for every . Then uniformly on if and only if     If uniformly on , then for every there exists such that for all and all . Taking the supremum over gives for .  Conversely, if , then for every there exists such that whenever . Hence for every , which is exactly uniform convergence.      Let be a sequence of functions on . Then converges uniformly on if and only if for every there exists such that     If uniformly on , then for every we may choose so that for all and all . Therefore, whenever , for all .  Conversely, suppose the displayed condition holds. Fix . Then is a Cauchy sequence in , so it converges by completeness. Define . Now let and choose as in the hypothesis. For and fixed , the inequality holds for all . Letting gives . Since this estimate is valid for every , the convergence is uniform.    A series of functions series of functions  on is studied through its partial sums We say that the series converges pointwise or uniformly according as the sequence does.   Weierstrass M-Test   Let be a sequence of functions on . Suppose there are numbers such that and suppose that the numerical series converges. Then the series converges absolutely and uniformly on .    Let . Since converges, its tails tend to . Thus, given , there exists such that for all , Hence for every , By , the partial sums converge uniformly on .  For each fixed , the estimate also shows that the numerical series converges by comparison. Therefore the convergence is absolute at every point.      Let . On the interval we have , and the geometric series converges. Therefore converges uniformly on by the Weierstrass M-test.     Uniform Convergence on Closed Subintervals   Suppose the power series has radius of convergence . Then for every with , the series converges absolutely and uniformly on the closed interval .    Let . Choose a number such that By the definition of , there exists such that for every , and hence for all such .  If and , then Since , the geometric series converges. For the finitely many indices , set . Then for every and every , and the numerical series converges. The Weierstrass M-test now gives absolute and uniform convergence on the stated interval.      The geometric series converges to on , but the convergence is not uniform on that open interval. Indeed, if , then For each fixed , the right-hand side becomes arbitrarily large as . Hence cannot converge uniformly to on .    "
},
{
  "id": "sec-sequences-and-series-of-functions-3",
  "level": "2",
  "url": "sec-sequences-and-series-of-functions.html#sec-sequences-and-series-of-functions-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pointwise "
},
{
  "id": "eg-pointwise-limit-xn",
  "level": "2",
  "url": "sec-sequences-and-series-of-functions.html#eg-pointwise-limit-xn",
  "type": "Example",
  "number": "8.1.1",
  "title": "",
  "body": "  Let on . Then for every , while for every . Thus the pointwise limit is Each is a polynomial, but the limit is not continuous at .   "
},
{
  "id": "sec-sequences-and-series-of-functions-6",
  "level": "2",
  "url": "sec-sequences-and-series-of-functions.html#sec-sequences-and-series-of-functions-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "uniformly "
},
{
  "id": "prop-uniform-implies-pointwise-functions",
  "level": "2",
  "url": "sec-sequences-and-series-of-functions.html#prop-uniform-implies-pointwise-functions",
  "type": "Proposition",
  "number": "8.1.2",
  "title": "",
  "body": "  Uniform convergence implies pointwise convergence.    Fix . If uniformly on , then for every there exists such that for all and all . In particular, the same inequality holds when . Therefore .   "
},
{
  "id": "eg-pointwise-not-uniform-xn",
  "level": "2",
  "url": "sec-sequences-and-series-of-functions.html#eg-pointwise-not-uniform-xn",
  "type": "Example",
  "number": "8.1.3",
  "title": "",
  "body": "  The convergence in is not uniform on . Let be the pointwise limit. For we have , so , while Hence does not tend to . Therefore cannot converge uniformly to on .   "
},
{
  "id": "sec-sequences-and-series-of-functions-9",
  "level": "2",
  "url": "sec-sequences-and-series-of-functions.html#sec-sequences-and-series-of-functions-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "supremum norm "
},
{
  "id": "prop-uniform-convergence-supnorm",
  "level": "2",
  "url": "sec-sequences-and-series-of-functions.html#prop-uniform-convergence-supnorm",
  "type": "Proposition",
  "number": "8.1.4",
  "title": "",
  "body": "  Suppose and are bounded on for every . Then uniformly on if and only if     If uniformly on , then for every there exists such that for all and all . Taking the supremum over gives for .  Conversely, if , then for every there exists such that whenever . Hence for every , which is exactly uniform convergence.   "
},
{
  "id": "prop-uniform-cauchy-criterion-functions",
  "level": "2",
  "url": "sec-sequences-and-series-of-functions.html#prop-uniform-cauchy-criterion-functions",
  "type": "Proposition",
  "number": "8.1.5",
  "title": "",
  "body": "  Let be a sequence of functions on . Then converges uniformly on if and only if for every there exists such that     If uniformly on , then for every we may choose so that for all and all . Therefore, whenever , for all .  Conversely, suppose the displayed condition holds. Fix . Then is a Cauchy sequence in , so it converges by completeness. Define . Now let and choose as in the hypothesis. For and fixed , the inequality holds for all . Letting gives . Since this estimate is valid for every , the convergence is uniform.   "
},
{
  "id": "sec-sequences-and-series-of-functions-12",
  "level": "2",
  "url": "sec-sequences-and-series-of-functions.html#sec-sequences-and-series-of-functions-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "series of functions "
},
{
  "id": "thm-weierstrass-m-test-functions",
  "level": "2",
  "url": "sec-sequences-and-series-of-functions.html#thm-weierstrass-m-test-functions",
  "type": "Theorem",
  "number": "8.1.6",
  "title": "Weierstrass M-Test.",
  "body": " Weierstrass M-Test   Let be a sequence of functions on . Suppose there are numbers such that and suppose that the numerical series converges. Then the series converges absolutely and uniformly on .    Let . Since converges, its tails tend to . Thus, given , there exists such that for all , Hence for every , By , the partial sums converge uniformly on .  For each fixed , the estimate also shows that the numerical series converges by comparison. Therefore the convergence is absolute at every point.   "
},
{
  "id": "eg-geometric-series-uniform-on-closed-subinterval",
  "level": "2",
  "url": "sec-sequences-and-series-of-functions.html#eg-geometric-series-uniform-on-closed-subinterval",
  "type": "Example",
  "number": "8.1.7",
  "title": "",
  "body": "  Let . On the interval we have , and the geometric series converges. Therefore converges uniformly on by the Weierstrass M-test.   "
},
{
  "id": "thm-power-series-uniform-on-compact-subintervals",
  "level": "2",
  "url": "sec-sequences-and-series-of-functions.html#thm-power-series-uniform-on-compact-subintervals",
  "type": "Theorem",
  "number": "8.1.8",
  "title": "Uniform Convergence on Closed Subintervals.",
  "body": " Uniform Convergence on Closed Subintervals   Suppose the power series has radius of convergence . Then for every with , the series converges absolutely and uniformly on the closed interval .    Let . Choose a number such that By the definition of , there exists such that for every , and hence for all such .  If and , then Since , the geometric series converges. For the finitely many indices , set . Then for every and every , and the numerical series converges. The Weierstrass M-test now gives absolute and uniform convergence on the stated interval.   "
},
{
  "id": "eg-geometric-series-not-uniform-on-open-interval",
  "level": "2",
  "url": "sec-sequences-and-series-of-functions.html#eg-geometric-series-not-uniform-on-open-interval",
  "type": "Example",
  "number": "8.1.9",
  "title": "",
  "body": "  The geometric series converges to on , but the convergence is not uniform on that open interval. Indeed, if , then For each fixed , the right-hand side becomes arbitrarily large as . Hence cannot converge uniformly to on .   "
},
{
  "id": "sec-interchanging-limits",
  "level": "1",
  "url": "sec-interchanging-limits.html",
  "type": "Section",
  "number": "8.2",
  "title": "Interchanging Limits",
  "body": " Interchanging Limits   Limits do not commute automatically. Even when every object in sight is continuous or integrable, taking one limit can destroy the hypotheses needed for another. Uniform convergence is the condition that makes many familiar limit operations legitimate.     Define Then for each fixed , , so But for each fixed , , and therefore So the two iterated limits are different.     Continuity of the Uniform Limit   Let , let , and suppose is continuous at for every . If uniformly on , then is continuous at .    Let . By uniform convergence, there exists such that Since is continuous at , there exists such that For such , Therefore is continuous at .      The uniform limit of continuous functions is continuous.      Let . If each is uniformly continuous on and uniformly on , then is uniformly continuous on .    Let . Choose such that for all . Since is uniformly continuous, there exists such that whenever and . For such , Hence is uniformly continuous on .      The sequence on converges pointwise to the discontinuous limit described in . Thus continuity is not preserved by pointwise convergence.     Integration of the Uniform Limit   Let for every , and suppose uniformly on . Then , and     Let Then . Fix , and choose so that . Since is integrable, the Darboux criterion ( ) gives a partition of such that   On each subinterval of , let be the supremum and infimum of , and let be the corresponding quantities for . From we obtain Summing over the partition gives Therefore is integrable.  Since is now integrable, part (4) of yields The right-hand side tends to , so .      For each , define Each is continuous on and therefore integrable. Geometrically, the graph is a triangle of base and height , so For every fixed , we have for all sufficiently large , and clearly . Thus pointwise on , but So pointwise convergence is not enough to interchange limit and integral.     Differentiation Under the Limit Sign   Let be an open interval, and let for every . Suppose there exists a point such that the numerical sequence converges, and suppose that converges uniformly on every compact interval to a function . Then there exists a differentiable function such that uniformly on every compact interval of , and     Let . Fix a compact interval , and set and . Then , and by hypothesis uniformly on . Since each is continuous, shows that is continuous on .  For each , the Fundamental Theorem of Calculus gives Define Then for , The right-hand side tends to , uniformly in . Hence uniformly on .  Because is continuous on every compact interval of , the Fundamental Theorem of Calculus implies that is differentiable on and that for every .      Uniform convergence of alone does not justify differentiating term by term. Let Since , we have uniformly on . But and the sequence does not even converge pointwise on ; for example, oscillates.    Theorems and explain why power series can be integrated and differentiated term by term on closed subintervals inside their interval of convergence.  "
},
{
  "id": "eg-two-limits-do-not-commute",
  "level": "2",
  "url": "sec-interchanging-limits.html#eg-two-limits-do-not-commute",
  "type": "Example",
  "number": "8.2.1",
  "title": "",
  "body": "  Define Then for each fixed , , so But for each fixed , , and therefore So the two iterated limits are different.   "
},
{
  "id": "thm-uniform-limit-continuous",
  "level": "2",
  "url": "sec-interchanging-limits.html#thm-uniform-limit-continuous",
  "type": "Theorem",
  "number": "8.2.2",
  "title": "Continuity of the Uniform Limit.",
  "body": " Continuity of the Uniform Limit   Let , let , and suppose is continuous at for every . If uniformly on , then is continuous at .    Let . By uniform convergence, there exists such that Since is continuous at , there exists such that For such , Therefore is continuous at .   "
},
{
  "id": "cor-uniform-limit-of-continuous-functions",
  "level": "2",
  "url": "sec-interchanging-limits.html#cor-uniform-limit-of-continuous-functions",
  "type": "Corollary",
  "number": "8.2.3",
  "title": "",
  "body": "  The uniform limit of continuous functions is continuous.   "
},
{
  "id": "cor-uniform-limit-uniformly-continuous",
  "level": "2",
  "url": "sec-interchanging-limits.html#cor-uniform-limit-uniformly-continuous",
  "type": "Corollary",
  "number": "8.2.4",
  "title": "",
  "body": "  Let . If each is uniformly continuous on and uniformly on , then is uniformly continuous on .    Let . Choose such that for all . Since is uniformly continuous, there exists such that whenever and . For such , Hence is uniformly continuous on .   "
},
{
  "id": "eg-pointwise-limit-can-destroy-continuity",
  "level": "2",
  "url": "sec-interchanging-limits.html#eg-pointwise-limit-can-destroy-continuity",
  "type": "Example",
  "number": "8.2.5",
  "title": "",
  "body": "  The sequence on converges pointwise to the discontinuous limit described in . Thus continuity is not preserved by pointwise convergence.   "
},
{
  "id": "thm-integral-uniform-limit",
  "level": "2",
  "url": "sec-interchanging-limits.html#thm-integral-uniform-limit",
  "type": "Theorem",
  "number": "8.2.6",
  "title": "Integration of the Uniform Limit.",
  "body": " Integration of the Uniform Limit   Let for every , and suppose uniformly on . Then , and     Let Then . Fix , and choose so that . Since is integrable, the Darboux criterion ( ) gives a partition of such that   On each subinterval of , let be the supremum and infimum of , and let be the corresponding quantities for . From we obtain Summing over the partition gives Therefore is integrable.  Since is now integrable, part (4) of yields The right-hand side tends to , so .   "
},
{
  "id": "eg-spike-functions-integrals",
  "level": "2",
  "url": "sec-interchanging-limits.html#eg-spike-functions-integrals",
  "type": "Example",
  "number": "8.2.7",
  "title": "",
  "body": "  For each , define Each is continuous on and therefore integrable. Geometrically, the graph is a triangle of base and height , so For every fixed , we have for all sufficiently large , and clearly . Thus pointwise on , but So pointwise convergence is not enough to interchange limit and integral.   "
},
{
  "id": "thm-differentiation-under-uniform-limit",
  "level": "2",
  "url": "sec-interchanging-limits.html#thm-differentiation-under-uniform-limit",
  "type": "Theorem",
  "number": "8.2.8",
  "title": "Differentiation Under the Limit Sign.",
  "body": " Differentiation Under the Limit Sign   Let be an open interval, and let for every . Suppose there exists a point such that the numerical sequence converges, and suppose that converges uniformly on every compact interval to a function . Then there exists a differentiable function such that uniformly on every compact interval of , and     Let . Fix a compact interval , and set and . Then , and by hypothesis uniformly on . Since each is continuous, shows that is continuous on .  For each , the Fundamental Theorem of Calculus gives Define Then for , The right-hand side tends to , uniformly in . Hence uniformly on .  Because is continuous on every compact interval of , the Fundamental Theorem of Calculus implies that is differentiable on and that for every .   "
},
{
  "id": "eg-uniform-limit-not-enough-for-derivatives",
  "level": "2",
  "url": "sec-interchanging-limits.html#eg-uniform-limit-not-enough-for-derivatives",
  "type": "Example",
  "number": "8.2.9",
  "title": "",
  "body": "  Uniform convergence of alone does not justify differentiating term by term. Let Since , we have uniformly on . But and the sequence does not even converge pointwise on ; for example, oscillates.   "
},
{
  "id": "sec-exponential-and-logarithmic-functions",
  "level": "1",
  "url": "sec-exponential-and-logarithmic-functions.html",
  "type": "Section",
  "number": "8.3",
  "title": "Exponential and Logarithmic Functions",
  "body": " Exponential and Logarithmic Functions   We now construct the exponential function directly from its power series. Uniform convergence on bounded intervals gives a genuine function, and the algebra of absolutely convergent series yields the familiar laws of exponents. The logarithm will then appear naturally as the inverse function.    The Exponential Series on Bounded Intervals   For every , the series converges uniformly on . Hence it defines a continuous function by     Fix . If , then The numerical series converges by the ratio test, since Therefore the Weierstrass M-test ( ) applies and gives uniform convergence on .    We write and in particular .   Addition Law   For all ,     For fixed , the numerical series and converge absolutely. Therefore Mertens' theorem ( ) applies to their product:   By the binomial theorem, Substituting this into the previous display gives       The exponential function is analytic on all of .    Fix . For every , the addition law gives Thus near the point , the function is represented by a power series in . Since was arbitrary, is analytic on .      The exponential function satisfies     The power series for has radius of convergence , so by it may be differentiated term by term:      Basic Properties of the Exponential Function   For all , the exponential function satisfies:   ,  ,  ,  is strictly increasing on .     The identity is immediate from the defining series. The addition law with gives so and, in particular, for every .  Because is continuous and , the Intermediate Value Theorem implies that cannot be negative: if it were, continuity would force a zero somewhere in between. Therefore for every .  Finally, shows that everywhere. By , is strictly increasing on .      The exponential function maps bijectively onto .    We already know from that for all and that is strictly increasing, so it is injective.  Also, Therefore and hence is unbounded above. Likewise, so the values of come arbitrarily close to .  Since is continuous and strictly increasing, its image is an interval. The previous paragraph shows that this interval contains arbitrarily large positive numbers and also positive numbers arbitrarily close to . Therefore the image is exactly .    Because is a continuous bijection from the interval onto the interval , it has a continuous inverse by . We call this inverse the natural logarithm logarithm natural and write   Since is the inverse of a continuous strictly increasing function, it is itself continuous and strictly increasing on .   Basic Properties of the Logarithm   For all ,   ,  ,  ,  .     Since and is the inverse of , we have .  Let and . Then and . Hence and applying to both sides gives   Taking in the previous identity yields so . The quotient rule for logarithms follows by combining the product rule with the reciprocal rule:       The logarithm is differentiable on , and     Apply to the continuous bijection . Since for every , the inverse function is differentiable, and for every .      For every ,     Let By the Fundamental Theorem of Calculus, . By , the same is true for . Therefore on . By , the difference is constant. Evaluating at gives so the constant is .    Finally, if , one may define The addition law for the exponential function then gives the usual rules for general real powers as well.  "
},
{
  "id": "thm-exponential-series-bounded-intervals",
  "level": "2",
  "url": "sec-exponential-and-logarithmic-functions.html#thm-exponential-series-bounded-intervals",
  "type": "Theorem",
  "number": "8.3.1",
  "title": "The Exponential Series on Bounded Intervals.",
  "body": " The Exponential Series on Bounded Intervals   For every , the series converges uniformly on . Hence it defines a continuous function by     Fix . If , then The numerical series converges by the ratio test, since Therefore the Weierstrass M-test ( ) applies and gives uniform convergence on .   "
},
{
  "id": "prop-exponential-addition-law",
  "level": "2",
  "url": "sec-exponential-and-logarithmic-functions.html#prop-exponential-addition-law",
  "type": "Proposition",
  "number": "8.3.2",
  "title": "Addition Law.",
  "body": " Addition Law   For all ,     For fixed , the numerical series and converge absolutely. Therefore Mertens' theorem ( ) applies to their product:   By the binomial theorem, Substituting this into the previous display gives    "
},
{
  "id": "cor-exponential-is-analytic",
  "level": "2",
  "url": "sec-exponential-and-logarithmic-functions.html#cor-exponential-is-analytic",
  "type": "Corollary",
  "number": "8.3.3",
  "title": "",
  "body": "  The exponential function is analytic on all of .    Fix . For every , the addition law gives Thus near the point , the function is represented by a power series in . Since was arbitrary, is analytic on .   "
},
{
  "id": "prop-exponential-derivative",
  "level": "2",
  "url": "sec-exponential-and-logarithmic-functions.html#prop-exponential-derivative",
  "type": "Proposition",
  "number": "8.3.4",
  "title": "",
  "body": "  The exponential function satisfies     The power series for has radius of convergence , so by it may be differentiated term by term:    "
},
{
  "id": "prop-exponential-basic-properties",
  "level": "2",
  "url": "sec-exponential-and-logarithmic-functions.html#prop-exponential-basic-properties",
  "type": "Proposition",
  "number": "8.3.5",
  "title": "Basic Properties of the Exponential Function.",
  "body": " Basic Properties of the Exponential Function   For all , the exponential function satisfies:   ,  ,  ,  is strictly increasing on .     The identity is immediate from the defining series. The addition law with gives so and, in particular, for every .  Because is continuous and , the Intermediate Value Theorem implies that cannot be negative: if it were, continuity would force a zero somewhere in between. Therefore for every .  Finally, shows that everywhere. By , is strictly increasing on .   "
},
{
  "id": "prop-exponential-range",
  "level": "2",
  "url": "sec-exponential-and-logarithmic-functions.html#prop-exponential-range",
  "type": "Proposition",
  "number": "8.3.6",
  "title": "",
  "body": "  The exponential function maps bijectively onto .    We already know from that for all and that is strictly increasing, so it is injective.  Also, Therefore and hence is unbounded above. Likewise, so the values of come arbitrarily close to .  Since is continuous and strictly increasing, its image is an interval. The previous paragraph shows that this interval contains arbitrarily large positive numbers and also positive numbers arbitrarily close to . Therefore the image is exactly .   "
},
{
  "id": "sec-exponential-and-logarithmic-functions-10",
  "level": "2",
  "url": "sec-exponential-and-logarithmic-functions.html#sec-exponential-and-logarithmic-functions-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural logarithm "
},
{
  "id": "prop-logarithm-basic-properties",
  "level": "2",
  "url": "sec-exponential-and-logarithmic-functions.html#prop-logarithm-basic-properties",
  "type": "Proposition",
  "number": "8.3.7",
  "title": "Basic Properties of the Logarithm.",
  "body": " Basic Properties of the Logarithm   For all ,   ,  ,  ,  .     Since and is the inverse of , we have .  Let and . Then and . Hence and applying to both sides gives   Taking in the previous identity yields so . The quotient rule for logarithms follows by combining the product rule with the reciprocal rule:    "
},
{
  "id": "prop-logarithm-derivative",
  "level": "2",
  "url": "sec-exponential-and-logarithmic-functions.html#prop-logarithm-derivative",
  "type": "Proposition",
  "number": "8.3.8",
  "title": "",
  "body": "  The logarithm is differentiable on , and     Apply to the continuous bijection . Since for every , the inverse function is differentiable, and for every .   "
},
{
  "id": "cor-logarithm-integral-formula",
  "level": "2",
  "url": "sec-exponential-and-logarithmic-functions.html#cor-logarithm-integral-formula",
  "type": "Corollary",
  "number": "8.3.9",
  "title": "",
  "body": "  For every ,     Let By the Fundamental Theorem of Calculus, . By , the same is true for . Therefore on . By , the difference is constant. Evaluating at gives so the constant is .   "
},
{
  "id": "sec-trigonometric-functions",
  "level": "1",
  "url": "sec-trigonometric-functions.html",
  "type": "Section",
  "number": "8.4",
  "title": "Trigonometric Functions",
  "body": " Trigonometric Functions   We now construct sine and cosine from their power series. The basic algebraic identities will emerge from differentiation and from a simple uniqueness argument for the differential equation . This follows the same general strategy used in classical analysis texts such as Rosenlicht.   For , define     For every , the defining series for and converge uniformly on . In particular, and are continuous on .    If , then Both numerical majorants converge by the ratio test, so the Weierstrass M-test ( ) gives uniform convergence on .      The functions and are analytic on , and     Each defining series has radius of convergence , so allows us to differentiate term by term: and Analyticity follows because both are power-series functions with infinite radius of convergence.    The defining series immediately show that so is odd and is even.    For every ,     Let . Using the product rule and , we get By , is constant on . Evaluating at gives Hence for all .      Let satisfy together with and . Then for every .    Consider the function Differentiating gives Hence is constant by . Since , we have for every . Therefore both and are identically zero.     Addition Formulas   For all , and     Fix . Define By , both functions belong to and satisfy . Also, Therefore satisfies the hypotheses of , so . This proves the sine addition formula.  For cosine, define Again both satisfy , and Hence by the same lemma.      If , then     For , the successive term magnitudes in the sine series satisfy Thus the terms decrease in absolute value to , so the alternating-series test gives       There exists a unique number such that     By and , we have Hence is strictly decreasing on .  Using the alternating-series estimate, while Therefore the Intermediate Value Theorem gives a zero of in , and strict decrease makes that zero unique.    We define \\pi to be twice this number:    Quarter-Turn Identities and Periodicity   For every , and consequently and   In particular,     Since and , we have . The addition formulas with therefore give and   Putting into the first identity gives , and then the second identity yields . Applying the addition formulas with gives and Replacing by in these formulas shows that       For every , and     By , we have for all . Applying the Mean Value Theorem to on the interval between and , we obtain for some between and . Since , it follows that .  Dividing the power series for by gives The right-hand side converges to as , and the power series for plainly tends to as well.    "
},
{
  "id": "prop-sine-cosine-series-convergence",
  "level": "2",
  "url": "sec-trigonometric-functions.html#prop-sine-cosine-series-convergence",
  "type": "Proposition",
  "number": "8.4.1",
  "title": "",
  "body": "  For every , the defining series for and converge uniformly on . In particular, and are continuous on .    If , then Both numerical majorants converge by the ratio test, so the Weierstrass M-test ( ) gives uniform convergence on .   "
},
{
  "id": "prop-sine-cosine-derivatives",
  "level": "2",
  "url": "sec-trigonometric-functions.html#prop-sine-cosine-derivatives",
  "type": "Proposition",
  "number": "8.4.2",
  "title": "",
  "body": "  The functions and are analytic on , and     Each defining series has radius of convergence , so allows us to differentiate term by term: and Analyticity follows because both are power-series functions with infinite radius of convergence.   "
},
{
  "id": "prop-pythagorean-identity",
  "level": "2",
  "url": "sec-trigonometric-functions.html#prop-pythagorean-identity",
  "type": "Proposition",
  "number": "8.4.3",
  "title": "",
  "body": "  For every ,     Let . Using the product rule and , we get By , is constant on . Evaluating at gives Hence for all .   "
},
{
  "id": "lem-trig-ode-uniqueness",
  "level": "2",
  "url": "sec-trigonometric-functions.html#lem-trig-ode-uniqueness",
  "type": "Lemma",
  "number": "8.4.4",
  "title": "",
  "body": "  Let satisfy together with and . Then for every .    Consider the function Differentiating gives Hence is constant by . Since , we have for every . Therefore both and are identically zero.   "
},
{
  "id": "thm-sine-cosine-addition-formulas",
  "level": "2",
  "url": "sec-trigonometric-functions.html#thm-sine-cosine-addition-formulas",
  "type": "Theorem",
  "number": "8.4.5",
  "title": "Addition Formulas.",
  "body": " Addition Formulas   For all , and     Fix . Define By , both functions belong to and satisfy . Also, Therefore satisfies the hypotheses of , so . This proves the sine addition formula.  For cosine, define Again both satisfy , and Hence by the same lemma.   "
},
{
  "id": "prop-sine-positive-on-zero-two",
  "level": "2",
  "url": "sec-trigonometric-functions.html#prop-sine-positive-on-zero-two",
  "type": "Proposition",
  "number": "8.4.6",
  "title": "",
  "body": "  If , then     For , the successive term magnitudes in the sine series satisfy Thus the terms decrease in absolute value to , so the alternating-series test gives    "
},
{
  "id": "prop-pi-over-two",
  "level": "2",
  "url": "sec-trigonometric-functions.html#prop-pi-over-two",
  "type": "Proposition",
  "number": "8.4.7",
  "title": "",
  "body": "  There exists a unique number such that     By and , we have Hence is strictly decreasing on .  Using the alternating-series estimate, while Therefore the Intermediate Value Theorem gives a zero of in , and strict decrease makes that zero unique.   "
},
{
  "id": "thm-trig-quarter-turn-periodicity",
  "level": "2",
  "url": "sec-trigonometric-functions.html#thm-trig-quarter-turn-periodicity",
  "type": "Theorem",
  "number": "8.4.8",
  "title": "Quarter-Turn Identities and Periodicity.",
  "body": " Quarter-Turn Identities and Periodicity   For every , and consequently and   In particular,     Since and , we have . The addition formulas with therefore give and   Putting into the first identity gives , and then the second identity yields . Applying the addition formulas with gives and Replacing by in these formulas shows that    "
},
{
  "id": "prop-sine-basic-limits",
  "level": "2",
  "url": "sec-trigonometric-functions.html#prop-sine-basic-limits",
  "type": "Proposition",
  "number": "8.4.9",
  "title": "",
  "body": "  For every , and     By , we have for all . Applying the Mean Value Theorem to on the interval between and , we obtain for some between and . Since , it follows that .  Dividing the power series for by gives The right-hand side converges to as , and the power series for plainly tends to as well.   "
},
{
  "id": "ex-ch8",
  "level": "1",
  "url": "ex-ch8.html",
  "type": "Exercises",
  "number": "8.5",
  "title": "Exercises",
  "body": " Exercises    Let on .    Find the pointwise limit of on .    Prove that does not converge uniformly on .    Show that does converge uniformly on for every .        Use the Weierstrass M-test to prove that the exponential series converges uniformly on every interval .      Prove directly from the definitions.      For each , define Show that pointwise on , but for every .      Define Use the derivative formula for to prove that for all .      Use the addition formulas for sine and cosine to prove that Deduce the identities     "
},
{
  "id": "ex-interchange-xn-not-uniform",
  "level": "2",
  "url": "ex-ch8.html#ex-interchange-xn-not-uniform",
  "type": "Exercise",
  "number": "8.5.1",
  "title": "",
  "body": "  Let on .    Find the pointwise limit of on .    Prove that does not converge uniformly on .    Show that does converge uniformly on for every .     "
},
{
  "id": "ex-interchange-exp-mtest",
  "level": "2",
  "url": "ex-ch8.html#ex-interchange-exp-mtest",
  "type": "Exercise",
  "number": "8.5.2",
  "title": "",
  "body": "  Use the Weierstrass M-test to prove that the exponential series converges uniformly on every interval .   "
},
{
  "id": "ex-interchange-uniform-limit-uniformly-continuous",
  "level": "2",
  "url": "ex-ch8.html#ex-interchange-uniform-limit-uniformly-continuous",
  "type": "Exercise",
  "number": "8.5.3",
  "title": "",
  "body": "  Prove directly from the definitions.   "
},
{
  "id": "ex-interchange-spike-functions",
  "level": "2",
  "url": "ex-ch8.html#ex-interchange-spike-functions",
  "type": "Exercise",
  "number": "8.5.4",
  "title": "",
  "body": "  For each , define Show that pointwise on , but for every .   "
},
{
  "id": "ex-interchange-logarithm-integral",
  "level": "2",
  "url": "ex-ch8.html#ex-interchange-logarithm-integral",
  "type": "Exercise",
  "number": "8.5.5",
  "title": "",
  "body": "  Define Use the derivative formula for to prove that for all .   "
},
{
  "id": "ex-interchange-double-angle-formulas",
  "level": "2",
  "url": "ex-ch8.html#ex-interchange-double-angle-formulas",
  "type": "Exercise",
  "number": "8.5.6",
  "title": "",
  "body": "  Use the addition formulas for sine and cosine to prove that Deduce the identities    "
},
{
  "id": "sec-cardinality-subsets-real",
  "level": "1",
  "url": "sec-cardinality-subsets-real.html",
  "type": "Section",
  "number": "A.1",
  "title": "Cardinality",
  "body": " Cardinality  For sets , means there is a bijection between them. In that case, we say that and have the same cardinality cardinality . We write if there is an injection . A set is countably infinite countably infinite if . A set is countable countable if it is either finite or countably infinite.  We begin with standard countable models that will be reused in later proofs.    The set is countable.    The map , , is bijective, with inverse . Hence .      The set is countable.    Define by and . This is bijective, so .      The set is countable.    For each , the diagonal is finite. Also . Enumerating each diagonal in increasing order of gives an enumeration of , so is countable.    The next theorem is the main comparison tool.   Cantor-Bernstein-Schroder   If and , then .    Proofs of can be found in and .    A countable union of countable sets is countable.    Let be a countable family (indexed by ) of countable sets. For , let be the least index with . Then is an injection into . For each , choose an injection . Then injects into . Since is countable, the union is countable.      The set is countable (hence is countable).    The map gives an injection , so . For the reverse inequality, map to where in lowest terms and . This is injective, and is countable (as a countable union of countable sets), so . By , .    Let be a set and let . The indicator function indicator function of in , denoted (or when is understood), is the map defined by   For any set , indicator functions give a bijection , where is the set of maps .   Cantor   For every set , .    The map is an injection . To show there is no surjection , suppose is surjective. Define by . Since is surjective, for some . Evaluating at gives , impossible. Hence .      The real line is uncountable.    By , . Define by . If , let be the first index with . Then , so is injective. Therefore , and thus cannot be countable.      The irrational numbers are uncountable.    If were countable, then would be a union of two countable sets, hence countable, contradicting .    "
},
{
  "id": "sec-cardinality-subsets-real-2",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#sec-cardinality-subsets-real-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cardinality countably infinite countable "
},
{
  "id": "prop-n-plus-zero-countable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#prop-n-plus-zero-countable",
  "type": "Proposition",
  "number": "A.1.1",
  "title": "",
  "body": "  The set is countable.    The map , , is bijective, with inverse . Hence .   "
},
{
  "id": "prop-n-times-two-countable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#prop-n-times-two-countable",
  "type": "Proposition",
  "number": "A.1.2",
  "title": "",
  "body": "  The set is countable.    Define by and . This is bijective, so .   "
},
{
  "id": "prop-n-square-countable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#prop-n-square-countable",
  "type": "Proposition",
  "number": "A.1.3",
  "title": "",
  "body": "  The set is countable.    For each , the diagonal is finite. Also . Enumerating each diagonal in increasing order of gives an enumeration of , so is countable.   "
},
{
  "id": "thm-cantor-bernstein-schroder",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#thm-cantor-bernstein-schroder",
  "type": "Theorem",
  "number": "A.1.4",
  "title": "Cantor-Bernstein-Schroder.",
  "body": " Cantor-Bernstein-Schroder   If and , then .   "
},
{
  "id": "prop-countable-union-countable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#prop-countable-union-countable",
  "type": "Proposition",
  "number": "A.1.5",
  "title": "",
  "body": "  A countable union of countable sets is countable.    Let be a countable family (indexed by ) of countable sets. For , let be the least index with . Then is an injection into . For each , choose an injection . Then injects into . Since is countable, the union is countable.   "
},
{
  "id": "prop-q-countable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#prop-q-countable",
  "type": "Proposition",
  "number": "A.1.6",
  "title": "",
  "body": "  The set is countable (hence is countable).    The map gives an injection , so . For the reverse inequality, map to where in lowest terms and . This is injective, and is countable (as a countable union of countable sets), so . By , .   "
},
{
  "id": "sec-cardinality-subsets-real-12",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#sec-cardinality-subsets-real-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "indicator function "
},
{
  "id": "thm-cantor-power-set",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#thm-cantor-power-set",
  "type": "Theorem",
  "number": "A.1.7",
  "title": "Cantor.",
  "body": " Cantor   For every set , .    The map is an injection . To show there is no surjection , suppose is surjective. Define by . Since is surjective, for some . Evaluating at gives , impossible. Hence .   "
},
{
  "id": "cor-r-uncountable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#cor-r-uncountable",
  "type": "Corollary",
  "number": "A.1.8",
  "title": "",
  "body": "  The real line is uncountable.    By , . Define by . If , let be the first index with . Then , so is injective. Therefore , and thus cannot be countable.   "
},
{
  "id": "prop-irrationals-uncountable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#prop-irrationals-uncountable",
  "type": "Proposition",
  "number": "A.1.9",
  "title": "",
  "body": "  The irrational numbers are uncountable.    If were countable, then would be a union of two countable sets, hence countable, contradicting .   "
},
{
  "id": "sec-cardinality-exercises",
  "level": "1",
  "url": "sec-cardinality-exercises.html",
  "type": "Section",
  "number": "A.2",
  "title": "Exercises",
  "body": " Exercises   Show that is countable.  Show that any subset of a countable set is countable.  Show that and have the same cardinality by constructing an explicit bijection.  Show that the intersection of two intervals is empty, a singleton, or an interval.  Show that the union of two overlapping intervals is an interval.   "
},
{
  "id": "sec-axioms-foundations",
  "level": "1",
  "url": "sec-axioms-foundations.html",
  "type": "Section",
  "number": "B.1",
  "title": "Foundations and Consequences",
  "body": " Foundations and Consequences   Ordered-Field Axioms  We start with a set with two operations and , and a subset . We call this an ordered field ordered field when the following hold.     and are commutative and associative, and for all .    There are distinct elements such that and for all .    Every has an additive inverse with , and every nonzero has a multiplicative inverse with .    The set is closed under addition and multiplication.    For each , exactly one of , , holds.    We define if and only if , and if and only if or .  To characterize the real numbers, we add the least upper bound property least upper bound property : every nonempty subset of that is bounded above has a least upper bound in . An ordered field with this property is a complete ordered field complete ordered field .    Uniqueness Up to Isomorphism  A standard theorem says that any two complete ordered fields are isomorphic (as ordered fields). This is the precise sense in which there is only one real number system up to isomorphism.  Reference: , Chapter II, end of Section 4 (after the proof of existence of square roots), where he states that Properties I-VII determine the real number system up to a unique one-to-one correspondence preserving sums and products.    Immediate Consequences of the Axioms  The next results are typical short derivations from the axioms (compare , Chapter II, Sections 1-2).    The additive identity and multiplicative identity are unique. For each , the additive inverse is unique; if , then the multiplicative inverse is unique.    If are additive identities, then . The same argument gives uniqueness of . If both satisfy and , then . The multiplicative case is identical for .      For every : , , and .    Since , distributivity gives . Adding to both sides yields .  Next, , so is an additive inverse of ; by uniqueness, .  Then . Also gives , hence . Therefore .      If , then for every . If and , then . Also, for every .    If , then . But , so .  If additionally , then and . Closure of under multiplication gives , hence .  For , exactly one of , , holds. If , then . Otherwise either or , and . Thus is never negative, i.e. .     "
},
{
  "id": "subsec-axioms-ordered-field-2",
  "level": "2",
  "url": "sec-axioms-foundations.html#subsec-axioms-ordered-field-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ordered field "
},
{
  "id": "subsec-axioms-ordered-field-5",
  "level": "2",
  "url": "sec-axioms-foundations.html#subsec-axioms-ordered-field-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "least upper bound property complete ordered field "
},
{
  "id": "prop-axioms-identity-inverse-uniqueness",
  "level": "2",
  "url": "sec-axioms-foundations.html#prop-axioms-identity-inverse-uniqueness",
  "type": "Proposition",
  "number": "B.1.1",
  "title": "",
  "body": "  The additive identity and multiplicative identity are unique. For each , the additive inverse is unique; if , then the multiplicative inverse is unique.    If are additive identities, then . The same argument gives uniqueness of . If both satisfy and , then . The multiplicative case is identical for .   "
},
{
  "id": "prop-axioms-basic-algebra-consequences",
  "level": "2",
  "url": "sec-axioms-foundations.html#prop-axioms-basic-algebra-consequences",
  "type": "Proposition",
  "number": "B.1.2",
  "title": "",
  "body": "  For every : , , and .    Since , distributivity gives . Adding to both sides yields .  Next, , so is an additive inverse of ; by uniqueness, .  Then . Also gives , hence . Therefore .   "
},
{
  "id": "prop-axioms-basic-order-consequences",
  "level": "2",
  "url": "sec-axioms-foundations.html#prop-axioms-basic-order-consequences",
  "type": "Proposition",
  "number": "B.1.3",
  "title": "",
  "body": "  If , then for every . If and , then . Also, for every .    If , then . But , so .  If additionally , then and . Closure of under multiplication gives , hence .  For , exactly one of , , holds. If , then . Otherwise either or , and . Thus is never negative, i.e. .   "
},
{
  "id": "sec-intervals",
  "level": "1",
  "url": "sec-intervals.html",
  "type": "Section",
  "number": "C.1",
  "title": "Intervals",
  "body": " Intervals  An interval  interval  is a subset of of one of the following forms, where and :             When , the interval is the empty set and . A nondegenerate interval is an interval with at least two points.  An interval contains every point between any two of its elements. In other words, whenever with . Conversely, any subset of with this property is an interval.    Every interval in is one of the nine forms listed above.    Let be an interval. If , then . If is a singleton, then . So we may assume that is nondegenerate.  First suppose that is bounded below but not bounded above. Let . If , then is not a lower bound of , so there is with . Since is not bounded above, there is also with . Because is an interval and , we get . Thus . On the other hand, no element of can be less than . Hence or , according as or .  The case when is bounded above but not bounded below is similar: if , then or .  If is neither bounded below nor bounded above, then for every we can choose with . Hence , so .  Finally, suppose that is bounded below and above. Let and . Since is nondegenerate, we have . If , then is neither a lower bound nor an upper bound of . So there exist with . Therefore . Thus . Also every element of lies in . Consequently, is one of , according to whether and belong to .      Every nondegenerate interval has cardinality . In particular, it is uncountable.    Every such interval contains an open interval and is a subset of . It is enough to show . The map with , , is a bijection . Also is a bijection . Hence , so .      The intersection of two intervals is an interval.    Let be intervals. Since and singletons are intervals, we may assume has at least two points . Since and are intervals, is a subset of both and , and hence of . Thus, is an interval.      The union of two overlapping intervals is an interval.    Let be two overlapping intervals, and pick . If is a singleton, then we are done. Otherwise, we can take in . We must show . If both and lie in the same interval, then is a subset of that interval, hence of . Otherwise, after relabeling we may assume and . If , then , a contradiction. If , then , a contradiction. Therefore . Then we have and . Hence , so is an interval.    "
},
{
  "id": "sec-intervals-2",
  "level": "2",
  "url": "sec-intervals.html#sec-intervals-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interval "
},
{
  "id": "sec-intervals-4",
  "level": "2",
  "url": "sec-intervals.html#sec-intervals-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nondegenerate interval "
},
{
  "id": "prop-classification-of-intervals",
  "level": "2",
  "url": "sec-intervals.html#prop-classification-of-intervals",
  "type": "Proposition",
  "number": "C.1.1",
  "title": "",
  "body": "  Every interval in is one of the nine forms listed above.    Let be an interval. If , then . If is a singleton, then . So we may assume that is nondegenerate.  First suppose that is bounded below but not bounded above. Let . If , then is not a lower bound of , so there is with . Since is not bounded above, there is also with . Because is an interval and , we get . Thus . On the other hand, no element of can be less than . Hence or , according as or .  The case when is bounded above but not bounded below is similar: if , then or .  If is neither bounded below nor bounded above, then for every we can choose with . Hence , so .  Finally, suppose that is bounded below and above. Let and . Since is nondegenerate, we have . If , then is neither a lower bound nor an upper bound of . So there exist with . Therefore . Thus . Also every element of lies in . Consequently, is one of , according to whether and belong to .   "
},
{
  "id": "prop-interval-cardinality-r",
  "level": "2",
  "url": "sec-intervals.html#prop-interval-cardinality-r",
  "type": "Proposition",
  "number": "C.1.2",
  "title": "",
  "body": "  Every nondegenerate interval has cardinality . In particular, it is uncountable.    Every such interval contains an open interval and is a subset of . It is enough to show . The map with , , is a bijection . Also is a bijection . Hence , so .   "
},
{
  "id": "prop-intersection-intervals",
  "level": "2",
  "url": "sec-intervals.html#prop-intersection-intervals",
  "type": "Proposition",
  "number": "C.1.3",
  "title": "",
  "body": "  The intersection of two intervals is an interval.    Let be intervals. Since and singletons are intervals, we may assume has at least two points . Since and are intervals, is a subset of both and , and hence of . Thus, is an interval.   "
},
{
  "id": "prop-union-overlapping-intervals",
  "level": "2",
  "url": "sec-intervals.html#prop-union-overlapping-intervals",
  "type": "Proposition",
  "number": "C.1.4",
  "title": "",
  "body": "  The union of two overlapping intervals is an interval.    Let be two overlapping intervals, and pick . If is a singleton, then we are done. Otherwise, we can take in . We must show . If both and lie in the same interval, then is a subset of that interval, hence of . Otherwise, after relabeling we may assume and . If , then , a contradiction. If , then , a contradiction. Therefore . Then we have and . Hence , so is an interval.   "
},
{
  "id": "sec-norm-and-metric-euclidean",
  "level": "1",
  "url": "sec-norm-and-metric-euclidean.html",
  "type": "Section",
  "number": "D.1",
  "title": "Euclidean Norm on <span class=\"process-math\">\\(\\R^n\\)<\/span>",
  "body": " Euclidean Norm on  Euclidean Norm on Rn  For vectors and in , their dot product dot product is . It is symmetric and bilinear.  The Euclidean norm Euclidean norm of is . From the definition we immediately get , if and only if , and for every . When , the norm is just the absolute value: .   Cauchy-Schwarz   For all , .    If , then both sides are zero, so there is nothing to prove. Assume . For each , . Expanding gives   This quadratic polynomial in is never negative, so its discriminant is at most zero: Hence , and taking square roots gives .      For all , .    By bilinearity and , Since both sides are nonnegative, taking square roots gives .      For all , .    By , , so . Interchanging and gives . Therefore .    "
},
{
  "id": "sec-norm-and-metric-euclidean-3",
  "level": "2",
  "url": "sec-norm-and-metric-euclidean.html#sec-norm-and-metric-euclidean-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product "
},
{
  "id": "sec-norm-and-metric-euclidean-4",
  "level": "2",
  "url": "sec-norm-and-metric-euclidean.html#sec-norm-and-metric-euclidean-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euclidean norm "
},
{
  "id": "thm-cauchy-schwarz-rn",
  "level": "2",
  "url": "sec-norm-and-metric-euclidean.html#thm-cauchy-schwarz-rn",
  "type": "Theorem",
  "number": "D.1.1",
  "title": "Cauchy-Schwarz.",
  "body": " Cauchy-Schwarz   For all , .    If , then both sides are zero, so there is nothing to prove. Assume . For each , . Expanding gives   This quadratic polynomial in is never negative, so its discriminant is at most zero: Hence , and taking square roots gives .   "
},
{
  "id": "prop-triangle-inequality-rn",
  "level": "2",
  "url": "sec-norm-and-metric-euclidean.html#prop-triangle-inequality-rn",
  "type": "Proposition",
  "number": "D.1.2",
  "title": "",
  "body": "  For all , .    By bilinearity and , Since both sides are nonnegative, taking square roots gives .   "
},
{
  "id": "prop-reverse-triangle-inequality-rn",
  "level": "2",
  "url": "sec-norm-and-metric-euclidean.html#prop-reverse-triangle-inequality-rn",
  "type": "Proposition",
  "number": "D.1.3",
  "title": "",
  "body": "  For all , .    By , , so . Interchanging and gives . Therefore .   "
},
{
  "id": "sec-norm-and-metric-metrics",
  "level": "1",
  "url": "sec-norm-and-metric-metrics.html",
  "type": "Section",
  "number": "D.2",
  "title": "Metrics",
  "body": " Metrics  Let be a set. A function is called a metric metric on if, for all , the following hold:   .  if and only if .  .  .   For , define the Euclidean distance Euclidean distance by .    The Euclidean distance is a metric on .    Since norms are nonnegative, . Also if and only if , which happens if and only if , that is, .  Symmetry follows from .  For the triangle inequality, by . Therefore is a metric.    "
},
{
  "id": "sec-norm-and-metric-metrics-2",
  "level": "2",
  "url": "sec-norm-and-metric-metrics.html#sec-norm-and-metric-metrics-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "metric "
},
{
  "id": "sec-norm-and-metric-metrics-4",
  "level": "2",
  "url": "sec-norm-and-metric-metrics.html#sec-norm-and-metric-metrics-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euclidean distance "
},
{
  "id": "prop-euclidean-distance-metric",
  "level": "2",
  "url": "sec-norm-and-metric-metrics.html#prop-euclidean-distance-metric",
  "type": "Proposition",
  "number": "D.2.1",
  "title": "",
  "body": "  The Euclidean distance is a metric on .    Since norms are nonnegative, . Also if and only if , which happens if and only if , that is, .  Symmetry follows from .  For the triangle inequality, by . Therefore is a metric.   "
},
{
  "id": "sec-norm-and-metric-exercises",
  "level": "1",
  "url": "sec-norm-and-metric-exercises.html",
  "type": "Section",
  "number": "D.3",
  "title": "Exercises",
  "body": " Exercises   Show directly from the definition that for , one has if and only if .  Let . Show that if , then .  Prove that for all , .  For , the Euclidean distance on is . Verify the four metric axioms in this case.   "
},
{
  "id": "sec-lebesgue-integrability-criterion",
  "level": "1",
  "url": "sec-lebesgue-integrability-criterion.html",
  "type": "Section",
  "number": "E.1",
  "title": "Lebesgue Integrability Criterion",
  "body": " Lebesgue Integrability Criterion  We record here a useful criterion for Riemann integrability that goes far beyond continuity and monotonicity. A proof can be found in .    A set has measure zero measure zero if for every there exists a sequence of open intervals such that where denotes the length of . A set of measure zero is also called a null set null set .    A property is said to hold almost everywhere almost everywhere on an interval if it fails only on a null set.    The set is a null set. Indeed, let . For each , define Then for every , so . Also, and therefore       Every countable subset of is a null set.    Let be countably infinite. Given , put Then and Finite sets are treated in the same way, by allowing all but finitely many intervals to be empty.      The union of two null sets is null.    Let and be null sets, and let . Choose open intervals covering with and open intervals covering with Then the countable family consisting of all the intervals and covers , and the total sum of their lengths is at most . Hence is null.     Lebesgue Integrability Criterion   A bounded function is Riemann integrable if and only if it is continuous almost everywhere on ; that is, if and only if the set of discontinuities of has measure zero.    The Thomae function from illustrates this criterion well: it is continuous at every irrational point and discontinuous at every rational point. Since is countable, shows that the set of discontinuities has measure zero, so the theorem predicts that the Thomae function is Riemann integrable.  The criterion also gives a quick explanation for some earlier results. If is continuous and is integrable, then every discontinuity of must already be a discontinuity of , so is integrable as well. Similarly, if and are integrable, then every discontinuity of lies in the union of the discontinuity sets of and . By , that union has measure zero, so is integrable.  "
},
{
  "id": "def-measure-zero",
  "level": "2",
  "url": "sec-lebesgue-integrability-criterion.html#def-measure-zero",
  "type": "Definition",
  "number": "E.1.1",
  "title": "",
  "body": "  A set has measure zero measure zero if for every there exists a sequence of open intervals such that where denotes the length of . A set of measure zero is also called a null set null set .   "
},
{
  "id": "sec-lebesgue-integrability-criterion-4",
  "level": "2",
  "url": "sec-lebesgue-integrability-criterion.html#sec-lebesgue-integrability-criterion-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "almost everywhere "
},
{
  "id": "eg-naturals-null",
  "level": "2",
  "url": "sec-lebesgue-integrability-criterion.html#eg-naturals-null",
  "type": "Example",
  "number": "E.1.2",
  "title": "",
  "body": "  The set is a null set. Indeed, let . For each , define Then for every , so . Also, and therefore    "
},
{
  "id": "cor-countable-sets-null",
  "level": "2",
  "url": "sec-lebesgue-integrability-criterion.html#cor-countable-sets-null",
  "type": "Corollary",
  "number": "E.1.3",
  "title": "",
  "body": "  Every countable subset of is a null set.    Let be countably infinite. Given , put Then and Finite sets are treated in the same way, by allowing all but finitely many intervals to be empty.   "
},
{
  "id": "prop-union-two-null-sets",
  "level": "2",
  "url": "sec-lebesgue-integrability-criterion.html#prop-union-two-null-sets",
  "type": "Proposition",
  "number": "E.1.4",
  "title": "",
  "body": "  The union of two null sets is null.    Let and be null sets, and let . Choose open intervals covering with and open intervals covering with Then the countable family consisting of all the intervals and covers , and the total sum of their lengths is at most . Hence is null.   "
},
{
  "id": "thm-lebesgue-integrability-criterion",
  "level": "2",
  "url": "sec-lebesgue-integrability-criterion.html#thm-lebesgue-integrability-criterion",
  "type": "Theorem",
  "number": "E.1.5",
  "title": "Lebesgue Integrability Criterion.",
  "body": " Lebesgue Integrability Criterion   A bounded function is Riemann integrable if and only if it is continuous almost everywhere on ; that is, if and only if the set of discontinuities of has measure zero.   "
},
{
  "id": "references-general",
  "level": "1",
  "url": "references-general.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " Maxwell Rosenlicht, Introduction to Analysis .  Walter Rudin, Principles of Mathematical Analysis .  Kenneth A. Ross, Elementary Analysis: The Theory of Calculus .  Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I . Online text .  Keith G. Binmore, Mathematical Analysis: A Straightforward Approach .  Robert P. Boas, Jr. and Harold P. Boas, A Primer of Real Functions .  Adam Besenyei, Peano's Unnoticed Proof of Borel's Theorem , The American Mathematical Monthly , 121 (2014), 69-72. Article link .   Borel theorem , Encyclopedia of Mathematics .  Robert G. Bartle and Donald R. Sherbert, Introduction to Real Analysis .  Jitan Lu, Is the Composition Function Integrable? , The American Mathematical Monthly , 106 (1999), 361-363. Online copy .  Paul Garrett, A Proof of the Cantor-Schroeder-Bernstein Theorem . Online lecture note .  Trevor Hyde, A Dynamical Proof of the Cantor-Bernstein Theorem .  "
},
{
  "id": "backmatter-8",
  "level": "1",
  "url": "backmatter-8.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-9",
  "level": "1",
  "url": "backmatter-9.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
